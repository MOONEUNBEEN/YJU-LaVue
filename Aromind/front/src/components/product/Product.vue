<template>
  <div>
    <div class="col-md-4">
      <div class="thumbnail">
        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" alt="">

        <div class="caption">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>

          <hr>

          <p>
            <a href="" class="btn btn-default">
              Wish list
            </a>

            <a href="" class="btn btn-success">
              Buy
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: ['product']
  }
</script>
