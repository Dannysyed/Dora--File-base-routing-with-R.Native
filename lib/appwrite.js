import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.danny.dora",
  projectId: "668d2db80002f49fbdf3",
  databaseId: "668d378600194e5facb9",
  userCollectionId: "668d38340006c68fea68",
  videoCollectionId: "668d3878001204d33846",
  storageId: "668d3b8b0032f10b014c",
};

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
    account.deleteSessions();
    // const session = await account.deleteSession(sessionId);
    // return session;
  } catch (error) {}
}

export async function getCurrentUser() {
  try {
    const currenAccount = await account.get();
    if (!currenAccount) throw Error;
    const currentUser = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currenAccount.$id)]
    );
    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}
export async function getAllPosts() {
  try {
    const posts = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId
    );
    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}
export async function getLatestPosts() {
  try {
    const posts = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(7)]
    );
    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}
