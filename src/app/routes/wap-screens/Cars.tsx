import { WapContentScreen } from '@/screens/WapContentScreen'
import { WapData } from '@/types/wap-data'

type CarsDataKeys = 'name' | 'brand' | 'price' | 'isElectric'

const carsData: WapData<CarsDataKeys> = {
  form: {
    name: {
      type: 'text',
      props: {
        label: 'Name',
      },
    },
    brand: {
      type: 'select',
      props: {
        label: 'Brand',
        data: ['Toyota', 'Honda', 'Ford', 'Chevrolet'],
      },
    },
    price: {
      type: 'number',
      props: {
        label: 'Price',
      },
    },
    isElectric: {
      type: 'radio',
      props: {
        label: 'Is Electric',
      },
      options: [
        { label: 'Yes', value: 'true' },
        { label: 'No', value: 'false' },
      ],
    },
  },
  table: {
    columns: [
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'brand',
        label: 'Brand',
      },
      {
        key: 'price',
        label: 'Price',
      },
      {
        key: 'isElectric',
        label: 'Is Electric',
      },
    ],
    rows: [
      {
        name: 'Corolla 2025',
        brand: 'Toyota',
        price: '75000$',
        isElectric: 'true',
      },
      {
        name: 'Honda 3',
        brand: 'Honda',
        price: '20000$',
        isElectric: 'false',
      },
      {
        name: 'Ford 24.7',
        brand: 'Ford',
        price: '30000$',
        isElectric: 'false',
      },
      {
        name: 'Chevrolet 2025',
        brand: 'Chevrolet',
        price: '40000$',
        isElectric: 'true',
      },
      {
        name: 'Toyota 2009',
        brand: 'Toyota',
        price: '50000$',
        isElectric: 'false',
      },
    ],
  },
  actions: [
    { type: 'log', payload: { message: 'Cars data logged' } },
    {
      type: 'notification',
      payload: {
        title: 'Cars',
        message: 'Cars data notified',
        color: 'green',
      },
    },
    {
      type: 'notification',
      payload: {
        title: 'Cars',
        message: 'Cars are on fire!',
        color: 'red',
      },
    },
  ],
}

export function Cars() {
  return <WapContentScreen data={carsData} />
}
