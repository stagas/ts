import { add } from '../src'

const container = document.querySelector('main')!
container.textContent = 'hello world! 1 + 2 = ' + add(1, 2)
