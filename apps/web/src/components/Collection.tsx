import React from "react";

interface Product {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  price: string;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "The Cashmere Overcoat",
    category: "Outerwear",
    imageUrl: "https://placehold.co/600x800/F5F5F4/1F2937?text=Cashmere+Overcoat",
    price: "$1,200",
  },
  {
    id: "2",
    title: "Silk Pleated Trousers",
    category: "Bottoms",
    imageUrl: "https://placehold.co/600x800/F5F5F4/1F2937?text=Silk+Trousers",
    price: "$850",
  },
  {
    id: "3",
    title: "Merino Wool Turtleneck",
    category: "Knitwear",
    imageUrl: "https://placehold.co/600x800/F5F5F4/1F2937?text=Merino+Turtleneck",
    price: "$590",
  },
  {
    id: "4",
    title: "Structured Leather Tote",
    category: "Accessories",
    imageUrl: "https://placehold.co/600x800/F5F5F4/1F2937?text=Leather+Tote",
    price: "$1,450",
  },
];

export default function Collection() {
  return (
    <section
      id="the-edit"
      className="py-32 px-6 md:px-12 lg:px-24 bg-[#f5f5f4] text-[#1f2937]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-8 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#6b7280] mb-6">
              The Edit
            </h2>
            <h3 className="text-4xl md:text-5xl font-light tracking-tight text-[#1f2937]">
              Curated Essentials
            </h3>
          </div>
          <a
            href="#all-products"
            className="text-xs md:text-sm uppercase tracking-widest border-b border-[#d6d3d1] pb-2 text-[#6b7280] hover:text-[#374151] hover:border-[#374151] transition-colors duration-300 inline-block w-fit"
          >
            View Complete Collection
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {(PRODUCTS ?? []).map((product) => (
            <article key={product.id} className="group cursor-pointer flex flex-col">
              {/* Image Container with Hover Zoom Effect */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f1f5f9] mb-6">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle overlay to enhance premium feel on hover */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 ease-out pointer-events-none" />
              </div>

              {/* Product Details */}
              <div className="flex flex-col space-y-2 flex-grow">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#6b7280]">
                  {product.category}
                </span>
                <h4 className="text-base md:text-lg font-normal text-[#1f2937] tracking-wide">
                  {product.title}
                </h4>
                <p className="text-sm text-[#4b5563] font-light mt-auto pt-2">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}