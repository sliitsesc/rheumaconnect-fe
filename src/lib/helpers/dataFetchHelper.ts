import { API_URL } from "@/config";

export async function getData(url: string) {
  try {
    const response = await fetch(API_URL + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
