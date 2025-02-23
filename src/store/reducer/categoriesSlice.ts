import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCategories} from '../services/api';

export interface Category {
  id: number;
  name: string;
}

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

// API'den kategorileri getiren thunk fonksiyonu
export const fetchCategories = createAsyncThunk<Category[]>(
  'categories/fetchCategories',
  async (_, {rejectWithValue}) => {
    try {
      return await getCategories();
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Bir hata oluştu',
      );
    }
  },
);

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categoriesSlice.reducer;
