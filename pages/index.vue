<template>
  <div>
    <header
      class="sticky top-0 z-50 flex justify-between items-center space-x-1 boder-b bg-white p-4 shadow-md"
    >
      <a class="text-3xl" href="/">cartrader</a>
    </header>
    <div
      class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80')]"
    >
      <div class="z-10 absolute w-full h-full flex justify-center items-center">
        <div class="text-center w-1/2">
          <h1 class="text-6xl mb-10 text-white">Find your drive</h1>
          <div
            class="w-[500px] text-2xl rounded-full bg-white flex justity-between overflow-hidden drop-shadow-2xl mx-auto"
          >
            <input
              type="text"
              placeholder="Search ..."
              class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
            />
            <button class="bg-sky-500 px-10 text-white">Search</button>
          </div>
        </div>
      </div>
      <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
    </div>
  </div>
</template>
