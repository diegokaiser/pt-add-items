import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemId, 
  timestamp: number,
  text: string
}

function App() {
  const { items, addItem, removeItem } = useItems()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { elements } = e.currentTarget
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    addItem(input.value)

    input.value = ''
  }
  
  const createHandleRemoteItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h2>Añadir elementos a una lista</h2>
        <form onSubmit={handleSubmit} aria-label='Add elements to list'>
          <label htmlFor="item">
            Introduce un elemento:
            <input 
              name='item'
              required
              type='text'
              placeholder='Ir a comprar el pan...'
            />
          </label>
          <button>
            Añadir elemento a la lista
          </button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos:</h2>
        {
          items.length === 0 ? (
            <p>
              <strong>No hay elementos en la lista.</strong>
            </p>
          ) : (
            <ul>
              {

                items.map(item => {
                  return (
                    <Item 
                      handleClick={createHandleRemoteItem(item.id)} {...item} 
                      key={item.id} 
                    />
                  )
                })
              }
            </ul>
          )
        }
      </section>
    </main>
  )
}

export default App
