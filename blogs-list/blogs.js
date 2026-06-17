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
    categories: 'Universe',
    featuredImage: 'image - 2024-12-01T153831.231.png',
    title: `Is a Parallel Universe Real? Exploring the Possibilities`,
    content: `
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quos nemo neque rerum nesciunt repellendus amet
      dolore, deleniti error dolorem, adipisci provident alias? Reiciendis, quisquam ut debitis earum nulla sequi
      beatae cupiditate explicabo qui quis autem sed quia eaque, odit ipsam perspiciatis assumenda repudiandae
      laudantium asperiores culpa, sit eligendi? Odio esse repellendus nam voluptate odit praesentium maiores debitis
      voluptates quas dolores ratione laudantium delectus ipsa quae nemo iure obcaecati velit, dolorem provident omnis
      voluptatibus quaerat ipsum alias vitae! Expedita, unde nemo, maxime saepe nam animi, veniam assumenda placeat et
      iusto vel molestias aut aspernatur enim quam minus quaerat debitis illum exercitationem aperiam commodi.
      Reprehenderit magni nobis totam, ex nihil sed pariatur rerum eaque quod enim aperiam explicabo omnis, corporis
      asperiores, ad eius accusamus quae nemo eum repellendus dicta nam! Quaerat fugit facilis accusamus voluptate,
      pariatur provident rerum repellendus laudantium sed ab cupiditate optio esse corrupti natus adipisci ducimus
      voluptatem ut dignissimos. Reprehenderit impedit optio, libero quod eligendi eum, vel cupiditate magnam commodi
      illum minima velit itaque ab? Ad deserunt quo velit in aspernatur mollitia, dignissimos eos esse, totam est
      commodi! Sapiente magnam cumque obcaecati ex rerum, autem esse, praesentium enim itaque exercitationem natus
      iste repudiandae aspernatur veritatis rem et qui hic, mollitia voluptatum nihil beatae fugit? Facilis culpa
      dolor a eum velit animi cupiditate harum enim eos quam, tenetur voluptas ea ut dolores quod eaque ullam labore
      iure doloribus similique mollitia architecto maxime omnis aliquam? Illum laborum cupiditate esse modi, ad
      ratione, neque tempore soluta molestiae, voluptatibus in nobis omnis voluptas nisi? Perferendis fuga pariatur
      nobis omnis. Velit commodi distinctio illo dolorum architecto nihil at accusamus incidunt voluptates enim?
      Accusamus facere itaque eum neque voluptatem minima, totam aliquam odit nisi vel ad beatae consequuntur mollitia
      laborum! Distinctio perspiciatis nisi, repellendus unde reiciendis beatae id optio, hic provident voluptatum
      ducimus quod.
    </p>
    
    <img src="../assets/images/image - 2024-12-01T144558.297.png" alt="">

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, vitae sunt hic eveniet nemo mollitia
      voluptates suscipit. Inventore reiciendis fugiat dignissimos quos omnis quis consectetur doloremque et quibusdam
      maiores qui ratione, laborum unde atque recusandae excepturi harum enim repudiandae perspiciatis tempora
      consequatur. Possimus, facilis provident! Molestiae quasi necessitatibus vero pariatur, earum odio quod aliquam
      repudiandae explicabo facilis iure ab accusantium animi tempore natus aperiam nobis consequatur, laborum
      placeat, rerum culpa distinctio veritatis numquam nam! Adipisci sapiente, a quaerat quis aspernatur, quibusdam
      corrupti voluptates consequatur vitae aliquid molestiae praesentium expedita mollitia obcaecati consequuntur
      nihil dolor incidunt animi ipsa ipsam! Ab tempore eum illo magnam deleniti aspernatur dignissimos dolor odit,
      repellat sed itaque iure, praesentium adipisci enim blanditiis. Harum atque nostrum laudantium, culpa aspernatur
      debitis qui expedita numquam, nemo, porro quam consectetur velit ut molestiae sed voluptatum neque nulla. Dolor
      laborum vel sed tempore? Repudiandae, atque iste debitis est consequuntur minima, repellat ipsam fugiat quis
      quia reprehenderit. Atque rerum facere, repellendus recusandae hic maxime sed, consequuntur unde non debitis,
      reiciendis adipisci repudiandae in similique. Eaque sequi ducimus asperiores vel non velit amet dignissimos
      dolor, tenetur corporis doloremque assumenda aliquid autem voluptates quis cupiditate. Quasi perspiciatis
      officia suscipit, ex impedit repellendus rerum consequuntur.

    </p>
`,
  }

]




