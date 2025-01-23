import { API_URL } from "@/config";

export async function getData(url: string) {
  try {
    if (!API_URL) {
      throw new Error("API_URL is not defined");
    }

    const response = await fetch(API_URL + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
