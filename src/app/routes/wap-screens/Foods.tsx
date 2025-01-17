import { WapContentScreen } from '@/screens/WapContentScreen'
import { WapData } from '@/types/wap-data'

type FoodsDataKeys = 'name' | 'description' | 'price' | 'quantity'

const foodsData: WapData<FoodsDataKeys> = {
  form: {
    name: {
      type: 'text',
      label: 'Name',
    },
    description: {
      type: 'textarea',
      label: 'Description',
    },
    price: {
      type: 'number',
      label: 'Price',
    },
    quantity: {
      type: 'select',
      label: 'Quantity',
      options: ['100', '200', '300'],
    },
  },
  table: [
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
  actions: [
    { type: 'log', payload: { message: 'Foods data loaded' } },
    {
      type: 'notification',
      payload: { title: 'Foods', message: 'Foods data loaded', color: 'green' },
    },
  ],
}

export function Foods() {
  return <WapContentScreen data={foodsData} />
}
