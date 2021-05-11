import create from 'zustand'

 const useStore = create(set => ({
  user: "",
  email: "",
  isLoggedIn: false,
  LoggIn: (newuser,newemail) => set(({ user: newuser, email: newemail, isLoggedIn: true })),
  LoggOut: () => set({ user: "", email: "", isLoggedIn: false })
}))

export default useStore;