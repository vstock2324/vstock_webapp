import Category from "./_components/Category";
import NewlyAdded from "./_components/NewlyAdded";
// import EditOwn from "./_components/EditOwn";
// import PromotionalViews from "./_components/PromotionalViews";
// import RecommendedViews from "./_components/RecommendedViews";
// import ClientReview from "./_components/ClientReviews";
import MainHomeLayout from "./_components/MainHomeLayout";

export default function HomePage() {
  return (
    <MainHomeLayout>
      <div className="container mx-auto bg-[#FEFAFF]">
        <Category />
        <div className="mt-[40px] " />
        <NewlyAdded />
      </div>
    </MainHomeLayout>
  );
}
