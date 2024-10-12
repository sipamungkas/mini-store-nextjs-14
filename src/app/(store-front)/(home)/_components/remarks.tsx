import { HeadphonesIcon, RefreshCw, Truck } from "lucide-react";

export const Remarks = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Truck className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Free & Fast Delivery</h3>
            <p className="text-gray-600">
              Get your items delivered quickly and for free.
            </p>
          </div>
          <div className="text-center">
            <HeadphonesIcon className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              24/7 Customer Service
            </h3>
            <p className="text-gray-600">
              Our support team is always here to help you.
            </p>
          </div>
          <div className="text-center">
            <RefreshCw className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Money Back Guarantee</h3>
            <p className="text-gray-600">
              Not satisfied? Get a full refund within 30 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
