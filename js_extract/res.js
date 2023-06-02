const res = [
  {
    q: "What is the output?print(2 ** 2 ** 3)",
    a: [{ a: "256", correct: true }],
  },
  {
    q: "What is the output?var = 2var = 3print(var)",
    a: [
      { a: "2", correct: false },
      { a: "Error", correct: false },
      { a: "var", correct: false },
      { a: "3", correct: false },
    ],
  },
  {
    q: "Python is a scripting language.",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "This code has no error. x= input('Enter a number')y= x+1print (y)",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "print () function is a built-in function type",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: 'This code has no error:# This is a multiline comment. # print("Hello!")',
    a: [
      { a: "False", correct: false },
      { a: "True", correct: false },
    ],
  },
  {
    q: "what is the output?print(5. // 2.)",
    a: [
      { a: "3", correct: false },
      { a: "3.0", correct: false },
      { a: "2.0", correct: false },
      { a: "2.5", correct: false },
    ],
  },
  {
    q: "what is the output?print ('2' + '2')",
    a: [{ a: "22", correct: true }],
  },
  {
    q: "Each function may have 1) an effect 2) a result.",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "what is the output?a = 6b = 3a /= 2 * bprint(a)",
    a: [
      { a: "1", correct: false },
      { a: "9", correct: false },
      { a: "9.0", correct: false },
      { a: "", correct: false },
    ],
  },
  {
    q: "for i in range(0, 6, 3): print(i)",
    a: [
      { a: "0 and 3", correct: false },
      { a: "0 and 0", correct: false },
      { a: "3 and 0", correct: false },
      { a: "Error", correct: false },
    ],
  },
  {
    q: "lst = [1, [7, 7], 4]print(lst[1])",
    a: [
      { a: "Error", correct: false },
      { a: "1", correct: false },
      { a: "[7,7]", correct: false },
      { a: "7", correct: false },
    ],
  },
  {
    q: 'list_1 = ["A", "B", "C"]list_2 = list_1list_3 = list_2del list_1[0]del list_2[0]print(list_3)',
    a: [
      { a: "[ ]", correct: false },
      { a: "Error", correct: false },
      { a: "list_3", correct: false },
      { a: "['C']", correct: false },
    ],
  },
  {
    q: "x = 1y = 0z = ((x == y) and (x == y)) or not(x == y)print(not(z))",
    a: [
      { a: "True", correct: false },
      { a: "0", correct: false },
      { a: "False", correct: false },
      { a: "1", correct: false },
    ],
  },
  {
    q: 'How many star is printed?i = 2while i >= 0:    print("*")    i -= 2',
    a: [
      { a: "one", correct: false },
      { a: "two", correct: false },
      { a: "three", correct: false },
      { a: "zero", correct: false },
    ],
  },
  {
    q: 'What is the output?hi()def hi():     print("hi!")',
    a: [
      { a: "None", correct: false },
      { a: "Error", correct: false },
      { a: "nothing", correct: false },
      { a: "hi!", correct: false },
    ],
  },
  {
    q: 'a = "A"b = "B"c = "C"d = " "lst = [a, b, c, d]lst.reverse()print(lst)',
    a: [
      { a: "['A', 'B', 'C', '']", correct: false },
      { a: "Error", correct: false },
      { a: "[' ', 'C', 'B', 'A']", correct: false },
      { a: "[a, b, c, d]", correct: false },
    ],
  },
  {
    q: "What is the output?for i in range (-1,1):     print ('%')",
    a: [
      { a: "out of range", correct: false },
      { a: "%", correct: false },
      { a: "%%%%", correct: false },
      { a: "%%", correct: false },
    ],
  },
  {
    q: "what is the output?m_l = [3,1,-1]m_l[-1] = m_l[-2]print (m_l)",
    a: [
      { a: "[3,-1,-1]", correct: false },
      { a: "[3,1,1]", correct: false },
      { a: "[3, -1, 1]", correct: false },
      { a: "Error", correct: false },
    ],
  },
  {
    q: 'def hi():     return     print("Hi!")hi()',
    a: [
      { a: "Error", correct: false },
      { a: "hi!", correct: false },
      { a: "Hi!", correct: false },
      { a: "None", correct: false },
    ],
  },
  {
    q: "You want to invoke the function make_money() contained in the module named mint. Your code begins with the following line:from mint import make_money What is the proper form of the function's invocation?",
    a: [
      { a: "All the above", correct: false },
      { a: "make_money", correct: false },
      { a: "mint.make_money()", correct: false },
      { a: "make_money()", correct: false },
    ],
  },
  {
    q: "write a line to import pi from math as PI",
    a: [{ a: "from math import pi as PI", correct: true }],
  },
  {
    q: "What is the expected output of the following code?the_list = ['Where', 'are', 'the', 'snows?']s = '*'.join(the_list)print(s)",
    a: [
      { a: "Where*are*the*snows?", correct: false },
      { a: "Error, it is immutable", correct: false },
      { a: "Where are the snows?", correct: false },
      { a: "Where*are*the*snows", correct: false },
    ],
  },
  {
    q: "How to uninstall a package named pygame?",
    a: [{ a: "pip uninstall pygame", correct: true }],
  },
  {
    q: "How to get all installed package in python?",
    a: [
      { a: "Impossible", correct: false },
      { a: "pip list", correct: false },
      { a: "pip install", correct: false },
      { a: "pip get list", correct: false },
    ],
  },
  {
    q: "A PWG-lead repository, collecting open-source Python code, is called:",
    a: [
      { a: "PyPI", correct: false },
      { a: "PyCR", correct: false },
      { a: "PWGR", correct: false },
      { a: "PyRep", correct: false },
    ],
  },
  {
    q: "How to get information about a package in python",
    a: [
      { a: "pip show package will tell you that.", correct: false },
      { a: "pip --version will tell you that.", correct: false },
      { a: "pip3 --version will tell you that.", correct: false },
      { a: "All the above.", correct: false },
    ],
  },
  {
    q: "the name pip comes from:",
    a: [
      { a: "package in package", correct: false },
      { a: "pip install packages", correct: false },
      { a: "all the above", correct: false },
      { a: "python internal packages", correct: false },
    ],
  },
  {
    q: "Python is completely internationalized - we can use UNICODE characters inside our code, read them from input and send to output.",
    a: [
      { a: "All the above", correct: false },
      { a: "True, because Python 3 is UCS-4", correct: false },
      { a: "True, because Python 3 is Ascii.", correct: false },
      { a: "True, because Python 3 is I18N.", correct: false },
    ],
  },
  {
    q: "You want to invoke the function make_money() contained in the module named mint. Your code begins with the following line:import mint What is the proper form of the function's invocation?",
    a: [
      { a: "mint.make_money()", correct: false },
      { a: "mint.make_money", correct: false },
      { a: "All the above", correct: false },
      { a: "make_money()", correct: false },
    ],
  },
  {
    q: 'What is the output of the following snippet?from datetime import timet = time(14, 39)print(t.strftime("%H:%M:%S"))',
    a: [
      { a: "14:39", correct: false },
      { a: "Error", correct: false },
      { a: "14:39:00", correct: false },
      { a: "strftime is not defined", correct: false },
    ],
  },
  {
    q: "The priority of ZeroDivisionError is higher than the ArithmeticError in the Exceptions-tree, that is why the Arithmetic error should be always before the ZeroDivisionError.",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "What is the name of the most general of all Python exceptions?",
    a: [
      { a: "MemoryError", correct: false },
      { a: "BaseException", correct: false },
      { a: "AssertionError", correct: false },
      { a: "Except", correct: false },
    ],
  },
  {
    q: "What is the output of the following snippet?from datetime import dateimport timetimestamp = time.time()d = date.fromtimestamp(timestamp)print(d)",
    a: [
      { a: "2023-04-03 15:00", correct: false },
      { a: "20230403.03042023", correct: false },
      { a: "1680511288.17736", correct: false },
      { a: "2023-04-03", correct: false },
    ],
  },
  {
    q: "What is the problem with this program ? If there is !from datetime import timedeltafrom datetime import datefrom dateTime import datetimedelta = timedelta(weeks=2, days=2, hours=2)print(delta)delta2 = delta * 2print(delta2)d = date(2019, 10, 4) + delta2print(d)dt = datetime(2019, 10, 4, 14, 53) + delta2print(dt)",
    a: [
      { a: "No problem found, it is working", correct: false },
      { a: "we should write from datetime import *", correct: false },
      { a: "dateTime no such module", correct: false },
      { a: "we should use try except form", correct: false },
    ],
  },
  {
    q: 'What is the output of the following snippet?from datetime import datetimedt = datetime(2023, 4, 3, 15, 10)print(dt.strftime("%y/%m/%d-%H:%M:%S"))',
    a: [
      { a: "23/04/03-15:10:10", correct: false },
      { a: "23/04/03-15:00:10", correct: false },
      { a: "23/04/03-15:10:00", correct: false },
      { a: "23/04/03", correct: false },
    ],
  },
  {
    q: "What is the output of the following snippet?from datetime import datetoday = date.today()print(today)",
    a: [
      { a: "2023%04%03", correct: false },
      { a: "2023_04_03", correct: false },
      { a: "20230403", correct: false },
      { a: "2023-04-03", correct: false },
    ],
  },
  {
    q: "BigData is more relevant to IoT.",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "Which of the following is not in the data analysis steps?",
    a: [
      { a: "Use Python", correct: false },
      { a: "Load Data", correct: false },
      { a: "Visualize Data", correct: false },
      { a: "Prepare Data", correct: false },
    ],
  },
  {
    q: "process for collecting data from avariety of sources, transformingthe data, and then loading thedata into a database",
    a: [
      { a: "import data using pandas", correct: false },
      { a: "ETL", correct: false },
      { a: "Gather Data", correct: false },
      { a: "deal with data using sqlite3", correct: false },
    ],
  },
  {
    q: "command to get the first rows of dataframe",
    a: [
      { a: "shape()", correct: false },
      { a: "tail()", correct: false },
      { a: "head()", correct: false },
      { a: "front()", correct: false },
    ],
  },
  {
    q: "Pandas is used in python to get a data frame.",
    a: [
      { a: "Igaz", correct: false },
      { a: "Hamis", correct: false },
    ],
  },
  {
    q: "Choose the correct order of the steps of data analyze",
    a: [
      { a: "load, prepare, analyze, visualize", correct: false },
      { a: "load, analyze, prepare, visualize", correct: false },
      { a: "prepare , load, analyze, visualize", correct: false },
      { a: "analyze, visualize, prepare , load", correct: false },
    ],
  },
  {
    q: "From jupyter, install the pandas package (hint, use pip)",
    a: [{ a: "pip install pandas", correct: true }],
  },
  {
    q: "Matplotlib is used in python to get a data frame.",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "Command to get the rows and columns in a format of (rows,columns)",
    a: [
      { a: "tail()", correct: false },
      { a: "head()", correct: false },
      { a: "shape()", correct: false },
      { a: "shape", correct: false },
    ],
  },
  {
    q: "I want to get the year from this format into a new column named, Year. Choose the correct answerdataframe name: dfcolumn name: Dateformat: 08/31/2014",
    a: [
      { a: "df['Year'] = df['Date'][5:10]", correct: false },
      {
        a: "df['Date'] = df['Year'].apply(lambda row: int(row[6:10]))",
        correct: false,
      },
      {
        a: "df['Year'] = df['Date'].apply(lambda row: int(row[6:10]))",
        correct: false,
      },
      {
        a: "df['Year'] = df['Date'].apply(lambda row: int(row[5:10]))",
        correct: false,
      },
    ],
  },
  {
    q: "To find the correlation for a data file imported in pandas as BB, you can use a method like :",
    a: [
      { a: "BB.corr()", correct: false },
      { a: "BB.describe()", correct: false },
      { a: "brainFrame.corr(method='pearson')", correct: false },
      { a: "brainFrame.corr()", correct: false },
    ],
  },
  {
    q: "Which method would you use to view table statistics? for a data frame called Data?weightcount10000.000000mean20.499212std0.199874min19.75200025%20.36500050%20.50000075%20.635000max21.171000",
    a: [
      { a: "Data.head()", correct: false },
      { a: "Data.describe()", correct: false },
      { a: "Data.dtype", correct: false },
      { a: "All can be used", correct: false },
    ],
  },
  {
    q: "Add a new column called rounded to the dataframe and populate it with rounded weights, the name of the dataframe is da it has the following data, note the round is 2     wieght0 1.000001 2.000002 3.000003 4.00000",
    a: [
      { a: "data['rounded'] = data.weight.round(2)", correct: false },
      { a: "data['rounded'] = data.weight.lambda (2)(2)", correct: false },
      { a: "data['rounded'] = data.weight.Round(2)", correct: false },
      { a: "da['rounded'] = da.weight.round(2)", correct: false },
    ],
  },
  {
    q: "Write a method to find the datatype of each column in a dataframe called y",
    a: [{ a: "y.dtypes", correct: true }],
  },
  {
    q: "What is this table for? FSIQVIQPIQWeightHeightMRI_CountFSIQ1.0000000.9466390.934125-0.051483-0.0860020.357641VIQ0.9466391.0000000.778135-0.076088-0.0710680.337478PIQ0.9341250.7781351.0000000.002512-0.0767230.386817Weight-0.051483-0.0760880.0025121.0000000.6996140.513378Height-0.086002-0.071068-0.0767230.6996141.0000000.601712MRI_Count0.3576410.3374780.3868170.5133780.6017121.000000",
    a: [
      { a: "this is a dataframe file.", correct: false },
      { a: "The is the correlation for a dataframe.", correct: false },
      {
        a: "this is the output of describe() method in pandas",
        correct: false,
      },
      { a: "This is output of head() method in pandas", correct: false },
    ],
  },
  {
    q: "Write a command to view the five 5 lines of the dataframe imported by pandas as brain.",
    a: [
      { a: "brain.head()", correct: true },
      { a: "brain.head(5)", correct: false },
    ],
  },
  {
    q: "how to filter a dataframe to contain only those rows where gender is male?",
    a: [
      { a: "male = [df.Gender == 'Male')]df", correct: false },
      { a: "df['male'] = [df.Gender == 'Male')]", correct: false },
      { a: "male = [df.Gender == 'Male')]", correct: false },
      { a: "male = df[(df.Gender == 'Male')]", correct: false },
    ],
  },
  {
    q: "in the following table, it is by coincidence, that the diagonal is 1 in thiscorrelation tableFSIQVIQPIQWeightHeightMRI_CountFSIQ1.0000000.9466390.934125-0.051483-0.0860020.357641VIQ0.9466391.0000000.778135-0.076088-0.0710680.337478PIQ0.9341250.7781351.0000000.002512-0.0767230.386817Weight-0.051483-0.0760880.0025121.0000000.6996140.513378Height-0.086002-0.071068-0.0767230.6996141.0000000.601712MRI_Count0.3576410.3374780.3868170.5133780.6017121.000000",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "Heat map is used to visualize the correlation for a dataframe!",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "Install a module call seaborn from jupyter",
    a: [
      { a: "!pip install seaborn", correct: true },
      { a: "pip install seaborn", correct: false },
    ],
  },
  {
    q: "An example of categorial variable is",
    a: [
      { a: "0 or 1", correct: false },
      { a: "gender", correct: false },
      { a: "weight", correct: false },
      { a: "number of visits", correct: false },
    ],
  },
  {
    q: "districtsalesstores01231.01212156.0132310.01634519.0245437.06If the dataframe above called SA, you can reach the Sales column in this way SA.sales or  SA.['sales']",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "Upload (Mbit/s)DateTimePing (ms)Download (Mbit/s)014.312016-11-2413:36:2526.99291.80114.122016-11-2413:36:5524.53288.19214.112016-11-2413:37:2520.22559.86314.222016-11-2413:37:5719.33291.81414.082016-11-2413:38:2722.49492.05Before saving the DataFrame, it makes sense to reposition Upload as the last column. This can be achieved using the reindex function.ex: df_compact_clean = df_compact_clean.reindex(columns = ['Date', 'Time', 'Ping (ms)','Download (Mbit/s)','Upload (Mbit/s)']);",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "df_compact_clean = df_compact_clean.reindex(columns = ['Date', 'Time', 'Ping (ms)','Download (Mbit/s)','Upload (Mbit/s)']);what will be the first column?Upload (Mbit/s)DateTimePing (ms)Download (Mbit/s)014.312016-11-2413:36:2526.99291.80114.122016-11-2413:36:5524.53288.19214.112016-11-2413:37:2520.22559.86314.222016-11-2413:37:5719.33291.81414.082016-11-2413:38:2722.49492.05",
    a: [
      { a: "Upload (Mbit/s)", correct: false },
      { a: "Time", correct: false },
      { a: "Date", correct: false },
      { a: "Download (Mbit/s)", correct: false },
    ],
  },
  {
    q: "To draw an arrow on a figure, then you can use the method called __________ from the matplotlib module (plt)",
    a: [
      { a: "plt.plot()", correct: false },
      { a: "plt.annotate()", correct: false },
      { a: "plt.xticks()", correct: false },
      { a: "plt.legend()", correct: false },
    ],
  },
  {
    q: "what method/function produces this output  from a dataframe called PP<class 'pandas.core.frame.DataFrame'>RangeIndex: 915 entries, 0 to 914Data columns (total 12 columns):PassengerId 915 non-null int64Survived 915 non-null int64Pclass 915 non-null int64Name 915 non-null objectGender 915 non-null objectAge 738 non-null float64SibSp 915 non-null int64",
    a: [
      { a: "PP.describe", correct: false },
      { a: "PP.info()", correct: false },
      { a: "PP.head()", correct: false },
      { a: "info(PP)", correct: false },
    ],
  },
  {
    q: "To change the datatype of a column called ping in a data frame called  df_compact_clean, you can use a lambda function in this way df_compact_clean['Ping (ms)_float'] = df_compact_clean['Ping (ms)'].apply(lambda val: float(val))",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "To calculate the error,  which module used (according to the labs)order = 1p = np.poly1d(np.polyfit(x, y ,order))from _________  import r2_scorer2 = r2_score(y, p(x))r2",
    a: [
      { a: "scikit", correct: false },
      { a: "sklearn", correct: false },
      { a: "sklearn.metrics", correct: false },
      { a: "seaborn", correct: false },
    ],
  },
  {
    q: "An example of numerical variable is weight or blood pressure.",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "districtsalesstores01231.01212156.0132310.01634519.0245437.06Drop the District column using the drop method. (Donot create a new dataframe, drop it from this dataframe itself) Important: the dataframe names is df",
    a: [
      { a: "df.drop('district',axis=1)", correct: false },
      { a: "df.drop('district',axis=1,inplace=True)", correct: false },
      { a: "sales = df.drop('district',axis=1)", correct: false },
      { a: "sales = df.drop('district',axis=1, inplace=True)", correct: false },
    ],
  },
  {
    q: "Data can be summarized using visualizations to help others understand the data. You need to focus on the data when you present .",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "Need a target to work",
    a: [
      { a: "All are correct", correct: false },
      { a: "Supervised ML", correct: false },
      { a: "Unsupervised ML", correct: false },
      { a: "Data Mining", correct: false },
    ],
  },
  {
    q: 'Can you name one of your classes just "class"?',
    a: [
      { a: "No, class is a function.", correct: false },
      { a: "I can, but there is no need for that.", correct: false },
      { a: "Yes, I can and why not?", correct: false },
      { a: "No, class is a keyword.", correct: false },
    ],
  },
  {
    q: "df_compact.to_csv('rpi_data_processed.csv', index=False)in the given code, it is necessary to make the index false.  Isn't it?",
    a: [
      {
        a: "We should make it True to not introduce new column.",
        correct: false,
      },
      { a: "It is to make the extension .csv", correct: false },
      { a: "No, it should be True.", correct: false },
      {
        a: "Yes, so that you do not introduce an additional column.",
        correct: false,
      },
    ],
  },
  {
    q: "Select the best visualization:drawing the percentage of men and women in a class.",
    a: [
      { a: "Scatter", correct: false },
      { a: "Line", correct: false },
      { a: "Bar", correct: false },
      { a: "Pie", correct: false },
    ],
  },
  {
    q: "x = lambda a,b : a ** bprint (x(2, 10))",
    a: [
      { a: "2222222222222", correct: false },
      { a: "Error", correct: false },
      { a: "1024", correct: false },
    ],
  },
  {
    q: "Data at Rest is",
    a: [
      { a: "data not used", correct: false },
      { a: "data can be stored somewhere", correct: false },
      { a: "Data cannot be updated", correct: false },
      { a: "data can be analyze", correct: false },
    ],
  },
  {
    q: "Big data can be defined: Data that is so vast, fast, or complex thatit becomes impossible to store, process,and analyze using traditional data storageand analytics applications",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: 'What is the expected output of the following code?import mathtry:     print(math.sqrt(-9))except ValueError:    print("inf")else:     print("fine")finally:     print("the end")',
    a: [
      { a: "inf the end", correct: false },
      { a: "fine the end", correct: false },
      { a: "fine", correct: false },
      { a: "inf", correct: false },
    ],
  },
  {
    q: "Select the best visualization:Average salary  based on a number of months",
    a: [
      { a: "Pie", correct: false },
      { a: "Bar", correct: false },
      { a: "Line", correct: false },
      { a: "Scatter", correct: false },
    ],
  },
  {
    q: "When you use a classification in ML, then you most probably will visualize the data using",
    a: [
      { a: "matplotlib", correct: false },
      { a: "hist", correct: false },
      { a: "heat map", correct: false },
      { a: "tree from graphviy", correct: false },
    ],
  },
  {
    q: "All data can be used as is.",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "Select the best visualization:drawing the throughput on a cable connecting two routers.",
    a: [
      { a: "Scatter", correct: false },
      { a: "Pie", correct: false },
      { a: "Bar", correct: false },
      { a: "Line (curves)", correct: false },
    ],
  },
  {
    q: "Which of the following is unstructured data ?",
    a: [
      { a: "all the above", correct: false },
      { a: ".db", correct: false },
      { a: ".csv", correct: false },
      { a: "email", correct: false },
    ],
  },
  {
    q: "# Modify this code floor_types = ['Parking', 'Shops', 'Food Court', 'Offices']floor_numbers = # Fill in the blank # put your code here zipped = list(zip(floor_types ,floor_numbers )) print(zipped)# To get this output [('Parking', 1), ('Shops', 2), ('Food Court', 3), ('Offices', 4)]",
    a: [
      { a: "[1, 2, 3, 4]", correct: true },
      { a: "range(1,5)", correct: false },
    ],
  },
  {
    q: "Given the following nested list, use indexing to grab the word \"Hi Big Data learner\". lst = ['a','b',[4,10,'Hi Big Data learner'],['c',[1,66,['this']],2,111],'e',7]",
    a: [
      { a: "lst[2][2]", correct: true },
      { a: "lst[2] [2]", correct: false },
    ],
  },
  {
    q: 'What is the expected output of the following code?import mathtry:     print(math.sqrt(9))except ValueError:    print("inf")else:    print("fine")',
    a: [
      { a: "Error", correct: false },
      { a: "fine", correct: false },
      { a: "3.0", correct: false },
      { a: "3.0 fine", correct: false },
    ],
  },
  {
    q: "Which of the following ARE type of data?",
    a: [
      { a: "Open Data", correct: false },
      { a: "Private Data", correct: false },
      { a: "Close Data", correct: false },
      { a: "Public Data", correct: false },
    ],
  },
  {
    q: "Which of the following is considered traditional data storage.",
    a: [
      { a: "mysql", correct: false },
      { a: "excel", correct: false },
      { a: "python", correct: false },
      { a: "sql", correct: false },
    ],
  },
  {
    q: "To fill a NaN values in a column in the age column , you can use the following codeNote: the dataframe called training<class 'pandas.core.frame.DataFrame'>RangeIndex: 915 entries, 0 to 914Data columns (total 12 columns):PassengerId 915 non-null int64Survived 915 non-null int64Pclass 915 non-null int64Name 915 non-null objectGender 915 non-null objectAge 738 non-null float64SibSp 915 non-null int64",
    a: [
      { a: 'training["Age"].fillna(training["Age"].mean())', correct: false },
      {
        a: 'training["Age"].fillna(training["Age"].mean(), axces=1)',
        correct: false,
      },
      { a: 'training["Age"].dropna()', correct: false },
      {
        a: 'training["Age"].fillna(training["Age"].mean(), inplace=True)',
        correct: false,
      },
    ],
  },
  {
    q: "How many default subplot will be generated from this codefig, ax = plt.subplots(1, 2, figsize=(10, 10))",
    a: [
      { a: "2", correct: false },
      { a: "3", correct: false },
      { a: "4", correct: false },
      { a: "1", correct: false },
    ],
  },
  {
    q: "Which of the following is structured data ?",
    a: [
      { a: ".pdf", correct: false },
      { a: "photo", correct: false },
      { a: ".docx", correct: false },
      { a: ".csv", correct: false },
    ],
  },
  {
    q: "Which of the following is unstructured data ?",
    a: [
      { a: ".csv", correct: false },
      { a: "text", correct: false },
      { a: ".xls", correct: false },
      { a: ".db", correct: false },
    ],
  },
  {
    q: "What is the outputfoo = [i + i for i in range(5)]print (foo)",
    a: [
      { a: "[0. 2. 4 .6 .8]", correct: false },
      { a: "0 2 4 6 8", correct: false },
      { a: "[1 , 3, ,5 7, 9]", correct: false },
    ],
  },
  {
    q: "When using the ML to predict something based on the given data, Calculating the noise ratio is important. One needs to know how correct is the prediction is .",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "Deductive reasoning uses facts, propositions, or other statements of truth to arrive at a conclusion.",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "This code can be used to find  how many values in dataframe are NaN?df_compact.isnull().sum().sum()Which of the following can also be used to find the number of NaN in the dataframe?",
    a: [
      { a: "all the choices", correct: false },
      { a: "df_compact.head()", correct: false },
      { a: "df_compact.info()", correct: false },
      { a: "df_compact.describe()", correct: false },
    ],
  },
  {
    q: "Which of the following is structured data?",
    a: [
      { a: ".cxs", correct: false },
      { a: "web page", correct: false },
      { a: "white paper", correct: false },
      { a: ".xls", correct: false },
    ],
  },
  {
    q: "In this way, we can drop the row from a dataframe named dfp dfp.drop(45)",
    a: [
      { a: "True", correct: false },
      { a: "False", correct: false },
    ],
  },
  {
    q: "<class 'pandas.core.frame.DataFrame'>RangeIndex: 915 entries, 0 to 914Data columns (total 12 columns):PassengerId 915 non-null int64Survived 915 non-null int64Pclass 915 non-null int64Name 915 non-null objectGender 915 non-null objectAge 738 non-null float64SibSp 915 non-null int64According to the above lines, In which column(s) there are NaN values.",
    a: [
      { a: "Pclass", correct: false },
      { a: "No NaN values are there", correct: false },
      { a: "Gender", correct: false },
      { a: "Age", correct: false },
    ],
  },
  {
    q: "Data in Motion",
    a: [
      { a: "Data moves from place to another", correct: false },
      { a: "requires real-time process", correct: false },
      { a: "backup data", correct: false },
      { a: "Data stored for analyzing", correct: false },
    ],
  },
  {
    q: "Learn from the data itself",
    a: [
      { a: "Supervised ML", correct: false },
      { a: "AI", correct: false },
      { a: "Unsupervised ML", correct: false },
      { a: "Data Mining", correct: false },
    ],
  },
];
