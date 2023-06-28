import React from 'react';

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  price: string | { old: string; new: string };
  sale: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, productName, price, sale }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {sale && (
          <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
            Sale
          </div>
        )}
        <img className="card-img-top" src={imageSrc} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{productName}</h5>
            {sale ? (
              <>
                {/*<span className="text-muted text-decoration-line-through">${price.old}</span> ${price?.new}*/}
              </>
            ) : (
              `$${price}`
            )}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              {sale ? 'Add to cart' : 'View options'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const products = [
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      productName: 'Fancy Product',
      price: { old: '40.00', new: '80.00' },
      sale: false,
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      productName: 'Special Post',
      price: { old: '20.00', new: '18.00' },
      sale: true,
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      productName: 'Sale Post',
      price: { old: '50.00', new: '25.00' },
      sale: true,
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      productName: 'Popular Post',
      price: '40.00',
      sale: false,
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      productName: 'Sale Post',
      price: { old: '50.00', new: '25.00' },
      sale: true,
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      productName: 'Fancy Product',
      price: { old: '120.00', new: '280.00' },
      sale: false,
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      productName: 'Special Post',
      price: { old: '20.00', new: '18.00' },
      sale: true,
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      productName: 'Popular Post',
      price: '40.00',
      sale: false,
    },
  ];

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              productName={product.productName}
              price={product.price}
              sale={product.sale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
