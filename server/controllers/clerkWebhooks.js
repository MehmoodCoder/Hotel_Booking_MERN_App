import User from "../models/UserModel.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const payload = req.body.toString("utf8");
    await whook.verify(payload, headers);

    const { data, type } = JSON.parse(payload);

    const userData = {
      _id: data.id,
      email: data.email_addresses[0]?.email_address || "",
      username: `${data.first_name || ""} ${data.last_name || ""}`.trim() || "User",
      image: data.image_url || "",
      recentSearchedCities: [],
    };

    switch (type) {
      case "user.created": {
        await User.create(userData);
        console.log("User successfully saved in MongoDB:", data.id);
        break;
      }
      case "user.updated": {
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }
      default:
        break;
    }

    res.json({
      success: true,
      message: "Webhook Recieved",
    });
  } catch (e) {
    console.log("Webhook Processing Error:", e.message);
    res.json({
      success: false,
      message: e.message,
    });
  }
};

export default clerkWebhooks;