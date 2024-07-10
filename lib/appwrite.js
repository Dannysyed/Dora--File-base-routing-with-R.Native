import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.danny.dora",
  projectId: "668d2db80002f49fbdf3",
  databaseId: "668d378600194e5facb9",
  userCollectionId: "668d38340006c68fea68",
  videoCollectionId: "668d3878001204d33846",
  storageId: "668d3b8b0032f10b014c",
};
const sessionId = "";
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);
export const createUser = async ({ username, email, password }) => {
  try {
    account.deleteSessions();
    const avatarUrl = avatars.getInitials(username);
    let newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;
    await signIn(email, password);
    const newUser = await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};
export async function signIn(email, password) {
  try {
    account.deleteSessions();
    const session = await account.createEmailPasswordSession(email, password);
    // account.deleteSession(session.$id);
    // sessionId = session.$id;
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
export async function logout(email, password) {
  try {
    const session = await account.deleteSession(sessionId);
    return session;
  } catch (error) {}
}
