import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Contact} from '../model/contact.model';
export const ContactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api'}),
  endpoints: builder => ({
    contact: builder.query<Contact, void>({
      query: () => '/users?page=2',
    }),
  }),
});
export const {useContactQuery} = ContactApi;
