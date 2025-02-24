@props(['customers'])

<x-master>
    <section>
        <div class="grid grid-cols-4 gap-6 mt-4">
            @foreach ($customers as $customer)
                <x-base.card :customer="$customer" />
            @endforeach
        </div>
    </section>
</x-master>
