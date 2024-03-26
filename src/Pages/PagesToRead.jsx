import { BarChart, Bar, XAxis, YAxis, Cell, LabelList, Label } from "recharts";
const data = [
  { bookName: "The Silent Patient", totalPages: 336, color: "#8884d8" },
  { bookName: "Where the Crawdads Sing", totalPages: 384, color: "#82ca9d" },
  { bookName: "Educated", totalPages: 352, color: "#ffc658" },
  { bookName: "The Night Circus", totalPages: 400, color: "#FF5733" },
  { bookName: "The Alchemist", totalPages: 208, color: "#C70039" },
  { bookName: "1984", totalPages: 328, color: "#900C3F" },
];
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
  return (
    <div>
      {/* <h2>pages to read</h2> */}
      <div className="container ">
        <BarChart className="mx-auto" width={1400} height={600} data={data}>
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
            <LabelList dataKey="totalPages" position="insideTop" angle="360" />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}

export default PagesToRead;
