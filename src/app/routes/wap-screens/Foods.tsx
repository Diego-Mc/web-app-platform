import { WapContentScreen } from '@/screens/WapContentScreen/WapContentScreen'
import { WapData } from '@/types/wap-data'

type FoodsDataKeys = 'name' | 'description' | 'price' | 'quantity'

const foodsData: WapData<FoodsDataKeys> = {
  form: {
    name: {
      type: 'text',
      props: {
        label: 'Name',
      },
    },
    description: {
      type: 'textarea',
      props: {
        label: 'Description',
      },
    },
    price: {
      type: 'number',
      props: {
        label: 'Price',
      },
    },
    quantity: {
      type: 'select',
      props: {
        label: 'Quantity',
        data: ['100', '200', '300'],
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
        key: 'price',
        label: 'Price',
      },
      {
        key: 'quantity',
        label: 'Quantity',
      },
    ],
    rows: [
      {
        name: 'Tomato',
        description: 'Tomato is a fruit',
        price: '10$',
        quantity: '100',
      },
      {
        name: 'Potato',
        description: 'Potato is a vegetable',
        price: '20$',
        quantity: '200',
      },
      {
        name: 'Carrot',
        description: 'Carrot is a vegetable',
        price: '30$',
        quantity: '300',
      },
    ],
  },
  actions: [
    {
      type: 'log',
      label: 'Log',
      payload: { message: 'Foods data logged' },
    },
    {
      type: 'notification',
      label: 'Notification',
      payload: {
        title: 'Foods',
        message: 'Foods data notified',
        color: 'green',
      },
    },
    {
      type: 'notification',
      label: 'Eat some food',
      payload: {
        title: 'Delicious',
        message: 'The food is delicious!',
        color: 'green',
      },
    },
  ],
}

export function Foods() {
  return <WapContentScreen data={foodsData} />
}
