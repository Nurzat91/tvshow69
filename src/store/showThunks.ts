import { createAsyncThunk } from "@reduxjs/toolkit";
import {ApiShows, Shows, ShowsList} from "../types";
import axiosApi from "../axiosApi";

export const fetchGetShow = createAsyncThunk(
  'score/fetchGetShow',
  async (userValue: string) => {
    const response = await axiosApi.get<ShowsList | null>(`/search/shows?q=${userValue}`);
    const dataResponse = response.data;

    let dataList: ApiShows[] = [];

    if (dataResponse) {
      dataList = Object.keys(dataResponse).map(id => {
        const data = dataResponse[id];
        return {
          ...data,
          id,
          name: data.name,
        }
      });
    }

    return dataList;
  }
);

export const fetchDataIdShow = createAsyncThunk(
  'score/fetchDataIdShow',
  async (id: string) => {
    const response = await axiosApi.get<ShowsList | null>(`/shows/${id}`);
    const dataResponse = response.data;

    let dataList: Shows[] = [];

    if (dataResponse) {
      dataList = Object.keys(dataResponse).map(id => {
        const data = dataResponse[id];
        return {
          ...data,
          id,
          name: data.name,
          summary: data.summary,
        }
      });
    }

    return dataList;
  }
);