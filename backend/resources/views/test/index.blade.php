@props([''])

<x-master>
    <p class="text-red-400 ">Index</p>
    <div class="grid grid-cols-4 gap-4 px-4">
        @foreach ([1, 2, 3, 4, 5, 6, 7, 8] as $item)
            <x-base.card />
        @endforeach
    </div>
</x-master>
