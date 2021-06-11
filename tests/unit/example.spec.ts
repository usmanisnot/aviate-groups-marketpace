import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { useStore, createStore } from 'vuex'

// jest.mock('superagent', ()=>{
//   get: () => {Promise.resolve(
//     {
//       userId: 1,
//       id: 6,
//       title: "dolorem eum magni eos aperiam quia",
//       body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
//     }
//   )}
// })

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const store = useStore()
    const wrapper = mount(HelloWorld, {
      props: { msg },
      
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
