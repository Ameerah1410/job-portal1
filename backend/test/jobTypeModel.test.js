const mongoose = require("mongoose");
const JobType = require("../models/jobTypeModel");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongod;

describe("JobType Model", () => {
  beforeAll(async () => {
    try {
      mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();

      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    }
  });

  afterAll(async () => {
    try {
      await mongoose.disconnect();
      await mongod.stop();
    } catch (err) {
      console.error("Error disconnecting from MongoDB:", err);
    }
  });

  it("should create a job type with valid data", async () => {
    const validJobType = new JobType({
      jobTypeName: "Valid Job Type",
      user: new mongoose.Types.ObjectId(), // Use 'new' here
    });

    await expect(validJobType.save()).resolves.toHaveProperty(
      "jobTypeName",
      "Valid Job Type"
    );
  });

  it("should not create a job type without a job category", async () => {
    const jobTypeWithoutCategory = new JobType({
      // Omitting the user field intentionally to trigger a validation error
    });

    await expect(jobTypeWithoutCategory.save()).rejects.toThrow(
      mongoose.Error.ValidationError
    );
  });
});
