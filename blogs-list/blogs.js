function blogIdGenerator() {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890@$%&';
  let id = '';

  for (let i = 0; i < 20; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return id;  // Add return statement
}

export let blogs = [
  {
    blogId: 1,
    filename: 'parallelUniverse.html',
    categories: 'Universe',
    featuredImage: 'image - 2024-12-01T153831.231.png',
    image1: 'image - 2024-12-01T144558.297.png',
    image2: '',
    title: `Is there any parallel universe exist`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus, tenetur accusamus neque molestiae rerum unde esse ipsam aperiam, totam officia, commodi reiciendis ea similique eaque. Pariatur quisquam culpa, reprehenderit perferendis adipisci odit libero neque in hic qui. Ullam distinctio odit exercitationem alias cum, aperiam voluptatum minima voluptatem recusandae esse facere rerum quas ducimus at adipisci nisi ratione dignissimos? Tenetur pariatur sunt repellendus officia maxime laudantium quibusdam nobis magni similique est dicta laboriosam, corporis suscipit dignissimos voluptas dolorum placeat. Ratione reiciendis voluptas tempore, perspiciatis alias ea dolorum officiis eligendi natus culpa, aut itaque quaerat eveniet obcaecati porro temporibus consequatur optio aspernatur, beatae voluptate! Assumenda reprehenderit eius molestias a. In reiciendis magnam, saepe ad perspiciatis iusto. Vero beatae aspernatur nulla! Blanditiis facilis expedita, dolore reprehenderit incidunt ullam corrupti ad temporibus modi natus deleniti voluptate repudiandae enim. Dolorum voluptatem id quos distinctio exercitationem obcaecati modi perferendis culpa reprehenderit, consequatur ipsam iste illum, eligendi, eius ducimus necessitatibus laudantium velit odio fugiat vel voluptas qui recusandae earum facere? Consequatur, tempore totam est hic itaque sint inventore voluptates ut, porro quos ab nemo illo possimus eum sit maxime recusandae explicabo laboriosam reprehenderit optio? Doloremque unde nemo modi, distinctio voluptatem pariatur recusandae eius placeat nam consequuntur!`,
  },
  {
    blogId: 2,
    filename: 'parallelUniverse.html',
    categories: 'Universe',
    featuredImage: 'image - 2024-12-01T144558.297.png',
    image1: '',
    image2: '',
    title: `Is there any parallel universe exist`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus, tenetur accusamus neque molestiae rerum unde esse ipsam aperiam, totam officia, commodi reiciendis ea similique eaque. Pariatur quisquam culpa, reprehenderit perferendis adipisci odit libero neque in hic qui. Ullam distinctio odit exercitationem alias cum, aperiam voluptatum minima voluptatem recusandae esse facere rerum quas ducimus at adipisci nisi ratione dignissimos? Tenetur pariatur sunt repellendus officia maxime laudantium quibusdam nobis magni similique est dicta laboriosam, corporis suscipit dignissimos voluptas dolorum placeat. Ratione reiciendis voluptas tempore, perspiciatis alias ea dolorum officiis eligendi natus culpa, aut itaque quaerat eveniet obcaecati porro temporibus consequatur optio aspernatur, beatae voluptate! Assumenda reprehenderit eius molestias a. In reiciendis magnam, saepe ad perspiciatis iusto. Vero beatae aspernatur nulla! Blanditiis facilis expedita, dolore reprehenderit incidunt ullam corrupti ad temporibus modi natus deleniti voluptate repudiandae enim. Dolorum voluptatem id quos distinctio exercitationem obcaecati modi perferendis culpa reprehenderit, consequatur ipsam iste illum, eligendi, eius ducimus necessitatibus laudantium velit odio fugiat vel voluptas qui recusandae earum facere? Consequatur, tempore totam est hic itaque sint inventore voluptates ut, porro quos ab nemo illo possimus eum sit maxime recusandae explicabo laboriosam reprehenderit optio? Doloremque unde nemo modi, distinctio voluptatem pariatur recusandae eius placeat nam consequuntur!`,
  },
  {
    blogId: 3,
    filename: 'parallelUniverse.html',
    categories: 'Universe',
    featuredImage: 'image - 2024-12-01T144558.297.png',
    image1: '',
    image2: '',
    title: `Is there any parallel universe exist`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus, tenetur accusamus neque molestiae rerum unde esse ipsam aperiam, totam officia, commodi reiciendis ea similique eaque. Pariatur quisquam culpa, reprehenderit perferendis adipisci odit libero neque in hic qui. Ullam distinctio odit exercitationem alias cum, aperiam voluptatum minima voluptatem recusandae esse facere rerum quas ducimus at adipisci nisi ratione dignissimos? Tenetur pariatur sunt repellendus officia maxime laudantium quibusdam nobis magni similique est dicta laboriosam, corporis suscipit dignissimos voluptas dolorum placeat. Ratione reiciendis voluptas tempore, perspiciatis alias ea dolorum officiis eligendi natus culpa, aut itaque quaerat eveniet obcaecati porro temporibus consequatur optio aspernatur, beatae voluptate! Assumenda reprehenderit eius molestias a. In reiciendis magnam, saepe ad perspiciatis iusto. Vero beatae aspernatur nulla! Blanditiis facilis expedita, dolore reprehenderit incidunt ullam corrupti ad temporibus modi natus deleniti voluptate repudiandae enim. Dolorum voluptatem id quos distinctio exercitationem obcaecati modi perferendis culpa reprehenderit, consequatur ipsam iste illum, eligendi, eius ducimus necessitatibus laudantium velit odio fugiat vel voluptas qui recusandae earum facere? Consequatur, tempore totam est hic itaque sint inventore voluptates ut, porro quos ab nemo illo possimus eum sit maxime recusandae explicabo laboriosam reprehenderit optio? Doloremque unde nemo modi, distinctio voluptatem pariatur recusandae eius placeat nam consequuntur!`,
  }


]