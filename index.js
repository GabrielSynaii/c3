const dfd = require("danfojs-node");

const encoder = new dfd.LabelEncoder();

const cols = [
  "gender",
  "ssc_b",
  "hsc_b",
  "hsc_s",
  "degree_t",
  "workex",
  "specialisation",
  "status",
];

dfd.read_csv("Placement_Data_Full_Class.csv").then((df_original) => {
  const df_no_salary = df_original.drop({
    columns: "salary",
  });

  for (col of cols) {
    encoder.fit(df_no_salary[col]);
    const enc_val = encoder.transform(df_no_salary[col]);
    df_no_salary[col] = enc_val;
  }

  df_no_salary.print();
});
