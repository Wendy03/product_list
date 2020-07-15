const dummyData = {
  products: [
    {
      id: 'XoFSppfmpLec2SJmjP1F88IxKk6UQNYSQd6CiNixh4967VgP96NrkfoWdTekWXbo',
      title: '肯亞AA',
      category: '中焙咖啡豆',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      content: '熱帶水果、黑莓、黑醋粟',
      imageUrl: [
        'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
      ],
      enabled: true,
      origin_price: 300,
      price: 300,
      unit: '單位',
    },
    {
      id: 'xJeYeX1ATyxDL9IRkKZHzta0Fyj0v8dsPZrsIF2jjkGWQK1l9eREBrXSLHEGFxXZ',
      title: '夏威夷可娜',
      category: '中焙咖啡豆',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      imageUrl: [
        'https://images.unsplash.com/photo-1525088553748-01d6e210e00b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
      ],
      enabled: true,
      origin_price: 300,
      price: 200,
      unit: '單位',
    },
    {
      id: '8DfnOrNA9nUJtdzO0nJMGX7Qw5ePzUgj00blGDYXDF9k6AXQmLHVVb7ngRZKMl8Z',
      title: '曼巴咖啡豆',
      category: '淺焙咖啡豆',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      imageUrl: [
        'https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      ],
      enabled: true,
      origin_price: 300,
      price: 200,
      unit: '單位',
    },
    {
      id: 'IzRdOQ5xEsCuCa511AUCkc1MCc7081MyJqzFT3oeG1Ges87VtTYJKOPqPi7wSDx9',
      title: '耶加雪菲',
      category: '中焙咖啡豆',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      content: 'Its wearer, like Artorias himself, can traverse the Abyss.',
      imageUrl: [
        'https://images.unsplash.com/photo-1525445842399-d8a6bec24be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      ],
      enabled: true,
      origin_price: 300,
      price: 200,
      unit: '單位',
    },
  ],
};

const app = new Vue({
  el: '#app',
  data: {
    products: [],
    tempProduct: {
      imageUrl: [],
      options: {
        comments: '',
      },
    },
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      const { products } = dummyData;
      this.products = products;
      this.products.forEach((item, index) => {
        const product = Object.assign({}, products);
        console.log(product);
        product[index].options = { comments: '' };
      });
    },
    openModal(isNew, item) {
      $('#productModal').modal('show');
      if (isNew) {
        this.tempProduct = {
          imageUrl: [],
          options: {
            comments: '',
          },
        };
        this.isNew = true;
      } else {
        this.tempProduct = JSON.parse(JSON.stringify(item));
        this.isNew = false;
      }
    },
    updateProduct() {
      const vm = this;
      if (!vm.isNew) {
        const id = vm.tempProduct.id;
        vm.products.forEach((product, i) => {
          if (product.id === id) {
            vm.products[i] = vm.tempProduct;
          }
        });
        Swal.fire({
          toast: true,
          text: '修改成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          padding: '2em',
        });
      } else {
        const id = new Date().getTime();
        vm.tempProduct.id = id;
        vm.products.push(vm.tempProduct);
        Swal.fire({
          toast: true,
          text: '新增成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          padding: '2em',
        });
      }
      vm.tempProduct = {
        imageUrl: [],
        options: {
          comments: '',
        },
      };
      $('#productModal').modal('hide');
    },
    delModal(item) {
      const vm = this;
      $('#delProductModal').modal('show');
      vm.tempProduct = JSON.parse(JSON.stringify(item));
      vm.tempProduct.options = { comments: '' };
    },
    delProduct() {
      const vm = this;
      const id = vm.tempProduct.id;
      vm.products.forEach((product, i) => {
        if (product.id == id) {
          vm.products.splice(i, 1);
        }
        vm.tempProduct = {
          imageUrl: [],
          options: {
            comments: '',
          },
        };
        Swal.fire({
          toast: true,
          text: '刪除成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          padding: '2em',
        });
      });
      $('#delProductModal').modal('hide');
    },
  },
});
