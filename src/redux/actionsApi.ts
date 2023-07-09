import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../supabase/client";

// items    -*-----*-----*-----*-----*-----*-----*-----*
export const uploadItems = createAsyncThunk("items/uploadItems", async () => {
  try {
    const { data, error } = await supabase.from("items").select("*");
    if (error) {
      console.error("Error al obtener los datos de Supabase:", error);
      throw new Error("Error al obtener los datos de Supabase");
    }
    // Retorna los datos recibidos de la Api
    return data;
  } catch (error) {
    console.error("Error al obtener los datos de Supabase:", error);
    throw error;
  }
});

// itemName -*-----*-----*-----*-----*-----*-----*-----*
export const uploadItemByName = createAsyncThunk(
  "items/getItemByName",
  async (itemName: String) => {
    try {
      const { data, error } = await supabase
        .from("items")
        .select()
        .eq("name", itemName);

      if (error) {
        console.error("Error al obtener los datos de Supabase:", error);
        throw new Error("Error al obtener los datos de Supabase");
      }
      // Retorna los datos recibidos de la Api
      return data;
    } catch (error) {
      console.error("Error al obtener los datos de Supabase:", error);
      throw error;
    }
  }
);
