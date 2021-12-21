<script setup lang="ts">


</script>
<template>
<div class="flex md:space-x-5  px-4 md:px-24 py-10 md:py-36 gap-x-44 ">
	
	<div class="">	
<img src="../bus.svg" alt="" class="h-96 w-96">
</div>

<div class="gap-x-16 bg-white w-1/2 shadow-lg shadow-cyan-500"  >
<div class="mt-8 text-center">
    <h1 class="font-bold text-3xl underline">Booking Form</h1></div>
    <div class="mt-8 space-y-8 ">
        <div class="px-4">
<input type="text" placeholder="Enter your Full Name" class="ring-2 focus:ring-2 w-full rounded-sm h-8" ></div>
<div  class="px-4">
<select class="ring-2 focus:ring-2  rounded-sm h-8 w-full">
<option selected>Magaalada aad  ka tagayso</option>
<option value="Hargeisa">Hargeisa</option>
<option value="borama">borama</option>
<option value="berbera">berbera</option>
<option value="burao">burao</option>
<option value="lascaanood">lascaanood</option>
<option value="Ceerigaabo">Ceerigaabo</option></select>


</div>
<div class="px-4">
<select class="ring-2 focus:ring-2  rounded-sm h-8 w-full ">
<option selected>Magaalada aad tagayso</option>
<option value="Hargeisa">Hargeisa</option>
<option value="borama">borama</option>
<option value="berbera">berbera</option>
<option value="burao">burao</option>
<option value="lascaanood">lascaanood</option>
<option value="Ceerigaabo">Ceerigaabo</option></select>


</div>
<div class="px-4">
<select class="ring-2 focus:ring-2 w-full rounded-sm h-8">
<option selected>Buska Aad raaceyso </option>
<option value="Safarsame">Safarsame</option>
<option value="Sacaada">Sacaada</option>
<option value="Sahal">Sahal</option>
<option value="Super-tranport">Super-tranport</option>
<option value="Bixin">Bixin</option>
<option value="Nabad gale">Nabad gale</option></select>

</div>
 <div class="px-4">
<input type="datetime-local" placeholder="Enter your dATE" class="ring-2 focus:ring-2 w-full rounded-sm h-8" ></div>
<div class="mt-12 flex items-center justify-center">
    <button class="btnbook"> Book Now</button>


</div>
<div class="mt-4"></div>
</div>
</div>


</div>


</template>
