import { mongoose } from "../db/mongoose";

var teamMeetingSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    meetingCourse: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    internalEmployees: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    users: [
      {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true
        },
        organization: {
          type: String,
          required: true
        },
        role: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

var TeamMeeting = mongoose.model<any>("TeamMeeting", teamMeetingSchema);
export { TeamMeeting }
