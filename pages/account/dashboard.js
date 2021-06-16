import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import DashboardEvent from "@/components/DashboardEvent";
import { API_URL } from "@/config/index";
import CardStats from "@/components/CardStats";
import { useState } from "react";

const DashboardPage = ({ events, token }) => {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(
    events.image ? events.image.formats.thumbnail.url : null
  );

  const deleteEvent = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.reload();
      }
    }
  };

  return (
    <main className=" min-h-screen-75">
      <Layout title="User Dashboard">
        <div className="flex flex-wrap ">
          <div className="w-full ">
            <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
              <div className=" md:px-10  mx-auto w-full">
                <div className="flex flex-wrap py-5 ">
                  {events.length > 0 ? (
                    <>
                      <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12 px-4">
                        <CardStats
                          statSubtitle="ENGAGEMENT"
                          statTitle="0"
                          statArrow="0"
                          statPercent="0"
                          statPercentColor=""
                          statDescripiron="Since last month"
                          statIconName="far fa-user"
                          statIconColor="bg-yellow-500"
                        />
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                        <CardStats
                          statSubtitle="TOTAL EVENTS"
                          statTitle={events.length}
                          statArrow="up"
                          statPercent={(events.length - 0) * 100}
                          statPercentColor="text-emerald-500"
                          statDescripiron="Since last month"
                          statIconName="far fa-chart-bar"
                          statIconColor="bg-red-500"
                        />
                      </div>
                      <div className="w-full lg:w-8/12 xl:w-4/12 px-4 ">
                        <CardStats
                          statSubtitle="NEAREST EVENT"
                          statTitle={events[0].name}
                          statDescripiron={`${new Date(
                            events[0].date
                          ).toLocaleDateString("en-US")} at ${events[0].time}`}
                          statIconName="fas fa-calendar-week"
                          statIconColor="bg-red-500"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <CardStats
                          statSubtitle="ENGAGEMENT"
                          statTitle="0"
                          statArrow="0"
                          statPercent="0"
                          statPercentColor=""
                          statDescripiron="Since last month"
                          statIconName="far fa-user"
                          statIconColor="bg-yellow-500"
                        />
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <CardStats
                          statSubtitle="TOTAL EVENTS"
                          statTitle="0"
                          statArrow="none"
                          statPercent="0"
                          statPercentColor=""
                          statDescripiron="Since last month"
                          statIconName="far fa-chart-bar"
                          statIconColor="bg-red-500"
                        />
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-10/12 px-4">
                        <CardStats
                          statSubtitle="NEAREST EVENT"
                          statTitle="N/A"
                          statIconName="fas fa-calendar-week"
                          statIconColor="bg-red-500"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap p-2 m-2 justify-center">
              {events.length > 0 ? (
                events.map((evt) => (
                  <div className="m-1">
                    <DashboardEvent
                      key={evt.id}
                      event={evt}
                      handleDelete={deleteEvent}
                    />
                  </div>
                ))
              ) : (
                <p
                  className="text-3xl text-center text-blueGray-800 underline mt-10"
                  style={{ minHeight: "52vh" }}
                >
                  You currently have no events.
                </p>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};
export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/account/login",
      },
      props: {},
    };
  }
  const res = await fetch(`${API_URL}/events/me?_sort=date:ASC`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();

  return {
    props: {
      events,
      token,
    },
  };
}
export default DashboardPage;
