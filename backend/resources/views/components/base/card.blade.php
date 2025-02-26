@props(['customer' => null])

<section>
    <a href="#" class="group relative block bg-black">
        <img alt=""
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

        <div class="relative p-4 sm:p-6 lg:p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-pink-500">{{ $customer?->name }}</p>

            <r- class="text-xl font-bold text-white sm:text-2xl">{{ $customer?->email }}</r->

            <div class="mt-32 sm:mt-48 lg:mt-64">
                <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p class="text-sm text-white">
                        {{ $customer?->type }}
                    </p>
                </div>
            </div>
        </div>
    </a>
</section>
