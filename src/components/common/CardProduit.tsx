import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";

const CardProduit = ({ product }: { product: Product }) => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-base">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={product.image?.url || "/images/product-1.jpg"}
          alt={product.image?.alt || product.name}
          loading="lazy"
          decoding="async"
          width={640}
          height={480}
          className="rounded-md w-full h-40 object-cover"
        />
        {product.price && <p className="text-sm text-muted-foreground mt-2">Prix indicatif : {product.price}</p>}
      </CardContent>
      <CardFooter>
        <Button variant="secondary" asChild>
          <a href={product.url || "#"} target="_blank" rel="noopener noreferrer">Voir sur Amazon</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduit;
