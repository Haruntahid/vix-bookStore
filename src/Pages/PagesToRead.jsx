import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { getBookFromLS } from "../utils/localStorage";

const getBookDetailsById = [
  {
    id: 1,
    bookName: "The Silent Patient",
    totalPages: 336,
    color: "#8884d8",
  },
  {
    id: 2,
    bookName: "Where the Crawdads Sing",
    totalPages: 384,
    color: "#82ca9d",
  },
  { id: 3, bookName: "Educated", totalPages: 352, color: "#ffc658" },
  { id: 4, bookName: "The Night Circus", totalPages: 400, color: "#FF5733" },
  { id: 5, bookName: "The Alchemist", totalPages: 208, color: "#C70039" },
  { id: 6, bookName: "1984", totalPages: 328, color: "#900C3F" },
];

// const [data, setData] = useState([
//   { id: 1, bookName: "The Silent Patient", totalPages: 336, color: "#8884d8" },
//   {
//     id: 2,
//     bookName: "Where the Crawdads Sing",
//     totalPages: 384,
//     color: "#82ca9d",
//   },
//   { id: 3, bookName: "Educated", totalPages: 352, color: "#ffc658" },
//   { id: 4, bookName: "The Night Circus", totalPages: 400, color: "#FF5733" },
//   { id: 5, bookName: "The Alchemist", totalPages: 208, color: "#C70039" },
//   { id: 6, bookName: "1984", totalPages: 328, color: "#900C3F" },
// ]);

function PagesToRead() {
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const localBookIds = getBookFromLS();
      if (localBookIds) {
        const bookDetails = await Promise.all(
          localBookIds.map((id) =>
            getBookDetailsById.find((book) => book.id === id)
          )
        );
        setData(bookDetails);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.length === 0 && (
        <div className="flex justify-center items-center flex-col">
          <img
            className="w-[80%] lg:w-[40%]"
            src="https://i.ibb.co/sqVWHy2/insert-block-concept-illustration-114360-4106.jpg"
            alt=""
          />
          <p className="text-2xl lg:text-3xl text-center">
            Uh-oh! Your reading list appears to be empty. <br /> Start adding
            books to see them visualized on the Page.
          </p>
        </div>
      )}

      {data.length > 0 && (
        <div className="container h-[calc(100vh-298px)]">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart className="mx-auto" data={data}>
              <XAxis
                dataKey="bookName"
                // label={{ value: "pv of page", position: "insideBottom" }}
              />
              {/* <Label value="Names of books" offset={0} position="bottom" /> */}
              <YAxis
                label={{
                  value: "Number of Book pages",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              {/* <Tooltip /> */}
              <Bar dataKey="totalPages" shape={<TriangleBar />}>
                <LabelList
                  dataKey="totalPages"
                  position="insideTop"
                  angle="360"
                />
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default PagesToRead;
