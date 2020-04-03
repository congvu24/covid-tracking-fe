import fetch from "node-fetch";
import axios from "axios";

const API_BASE = "http://localhost:8080";

export const getOverView = async () => {
  const data = {
    success: true,
    data: {
      global: {
        cases: "961589",
        deaths: "49165",
        recovered: "203176"
      },
      vietnam: {
        cases: "227",
        deaths: "0",
        recovered: "75"
      }
    }
  };
  return data.data;
};

export const getAllCountry = async () => {
  const data = await callApi("/getall");
  return data.data;
};

export const getNews = async () => {
  try {
    let res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnews.vn%2Frss%2Fsociety.rss`,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    let data = await res.json();
    if (data.status == "ok") {
      return data.items.slice(0, 2);
    } else throw "khong co data";
  } catch {
    return {};
  }
};

const callApi = async endPoint => {
  try {
    let res = await fetch(`${API_BASE}${endPoint}`, {
      headers: { "Content-Type": "application/json" }
    });
    let data = await res.json();
    if (data.status) {
      return data;
    } else throw "khong co data";
  } catch {
    return {};
  }
};
