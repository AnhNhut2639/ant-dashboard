export type TComment = {
  id?: number;
  body?: string;
  postId?: number;
  user?: {
    id?: number;
    username: string;
  };
};

export type TOrder = {
  id?: number;
  title?: string;
  price?: number;
  quantity?: number;
  total?: number;
  discountPercentage?: number;
  discountedPrice?: number;
};

export type TOrders = {
  id?: number;
  products?: Array<TOrder>;
  total?: number;
  discountedTotal?: number;
  userId?: number;
  totalProducts?: number;
  totalQuantity?: number;
};
