import { WapContentScreen } from '@/screens/WapContentScreen/WapContentScreen'
import { WapData } from '@/types/wap-data'

type ProductsDataKeys =
  | 'name'
  | 'description'
  | 'type'
  | 'isAvailable'
  | 'price'

const productsData: WapData<ProductsDataKeys> = {
  form: {
    name: {
      type: 'text',
      props: {
        label: 'Name',
      },
    },
    description: {
      type: 'text',
      props: {
        label: 'Description',
      },
    },
    type: {
      type: 'select',
      props: {
        label: 'Type',
        data: ['Electronics', 'Clothing', 'Home', 'Sports'],
      },
    },
    isAvailable: {
      type: 'checkbox',
      props: {
        label: 'Is Available',
      },
    },
    price: {
      type: 'number',
      props: {
        label: 'Price',
      },
    },
  },
  table: {
    columns: [
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'description',
        label: 'Description',
      },
      {
        key: 'type',
        label: 'Type',
      },
      {
        key: 'isAvailable',
        label: 'Is Available',
      },
      {
        key: 'price',
        label: 'Price',
      },
    ],
    rows: [
      {
        name: 'Toothbrush',
        description: 'Toothbrush is a toothbrush',
        type: 'Home',
        isAvailable: 'true',
        price: '10$',
      },
      {
        name: 'Shirt',
        description: 'Shirt is a shirt',
        type: 'Clothing',
        isAvailable: 'true',
        price: '20$',
      },
      {
        name: 'T-Shirt',
        description: 'T-Shirt is a t-shirt',
        type: 'Clothing',
        isAvailable: 'false',
        price: '30$',
      },
      {
        name: 'IPhone',
        description: 'IPhone is a phone',
        type: 'Electronics',
        isAvailable: 'true',
        price: '400$',
      },
      {
        name: 'Headphones',
        description: 'Headphones are headphones',
        type: 'Electronics',
        isAvailable: 'true',
        price: '50$',
      },
    ],
  },
  actions: [
    { type: 'log', payload: { message: 'Products data logged' } },
    {
      type: 'notification',
      payload: {
        title: 'Products',
        message: 'Products data notified',
        color: 'green',
      },
    },
    {
      type: 'notification',
      payload: {
        title: 'SALE!',
        message: 'Products are on SALE!',
        color: 'yellow',
      },
    },
  ],
}

export function Products() {
  return <WapContentScreen data={productsData} />
}
