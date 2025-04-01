import { z } from "zod";

export const Vector_Url = z.object({
  serial_no: z.number(),
  vector_id: z.string(),
  name: z.string(),
  description: z.string(),
  likes: z.number(),
  shares: z.number(),
  format: z.string(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
  subscription_type: z.string(),
  orientation: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const Vector_Category = z.object({
  vector_id: z.string(),
  category_id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const Vector_Tag = z.object({
  vector_id: z.string(),
  tag_id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TotalPages = z.object({
  currentPage: z.number(),
  totalPages: z.number(),
});

export const Tags = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const Pages = z.object({
  currentPage: z.number(),
  totalPages: z.number(),
});

export const CRUMB = z.object({
  id: z.string(),
  name: z.string(),
});

export const Animation_Url = z.object({
  serial_no: z.number(),
  animation_id: z.string(),
  name: z.string(),
  description: z.string(),
  likes: z.number(),
  shares: z.number(),
  format: z.string(),
  license: z.string(),
  orientation: z.string(),
  animation_data: z.any(),
  thumbnail_url: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const SearchParams = z.object({
  page: z.string().optional(),
  license: z.string().optional(),
  orientation: z.string().optional(),
  format: z.string().optional(),
  sort: z.string().optional(),
  uuid: z.string().optional(),
});

export const limit: number = 20;

export const VectorsType = z.object({
  name: z.string(),
  id: z.string(),
  updated_at: z.string(),
  created_at: z.string(),
  last_accessed_at: z.string(),
  metadata: z.object({
    eTag: z.string(),
    size: z.number(),
    mimetype: z.string(),
    cacheControl: z.string(),
    lastModified: z.string(),
    contentLength: z.number(),
    httpStatusCode: z.number(),
  }),
});


export type VectorsDataType=z.infer<typeof VectorsType>;