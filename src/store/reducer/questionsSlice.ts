import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getQuestions} from '../services/api';

export interface Question {
  id: number;
  question: string;
  categoryId: number;
}

interface QuestionsState {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

// API'den soruları getiren thunk
export const fetchQuestions = createAsyncThunk<Question[]>(
  'questions/fetchQuestions',
  async (_, {rejectWithValue}) => {
    try {
      return await getQuestions();
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Bir hata oluştu',
      );
    }
  },
);

const initialState: QuestionsState = {
  questions: [],
  loading: false,
  error: null,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuestions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default questionsSlice.reducer;
