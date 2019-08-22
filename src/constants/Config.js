export const API_URL ="http://localhost:3000/";

const bashSource = "echo \"hello, world\"\n";

const basicSource = "PRINT \"hello, world\"\n";

const cSource = "\
#include <stdio.h>\n\
\n\
int main(void) {\n\
    printf(\"hello, world\\n\");\n\
    return 0;\n\
}\n";

const cppSource = "\
#include <iostream>\n\
\n\
int main() {\n\
    std::cout << \"hello, world\" << std::endl;\n\
    return 0;\n\
}\n";

var csharpSource = "\
public class Hello {\n\
    public static void Main() {\n\
        System.Console.WriteLine(\"hello, world\");\n\
    }\n\
}\n";

var clojureSource = "(println \"hello, world\")\n";

var crystalSource = "puts \"hello, world\"\n";

var elixirSource = "IO.puts \"hello, world\"\n";

var erlangSource = "\
main(_) ->\n\
    io:fwrite(\"hello, world\\n\").\n";

var goSource ="\
package main\n\
\n\
import \"fmt\"\n\
\n\
func main() {\n\
    fmt.Println(\"hello, world\")\n\
}\n";

var haskellSource = "main = putStrLn \"hello, world\"\n";

var insectSource ="\
2 min + 30 s\n\
40 kg * 9.8 m/s^2 * 150 cm\n\
sin(30°)\n";

var javaSource = "\
class Solution {\n\
    public int[] twoSum(int[] nums, int target) {\n\
        Map<Integer,Integer> map = new HashMap<>();\n\
        for(int i = 0 ; i< nums.length ; i++){\n\
            int value = target - nums[i];\n\
            if(map.containsKey(value)){\n\
                return new int[] {map.get(value), i};\n\
            }\n\
            map.put(nums[i], i);\n\
        }\n\
        throw new IllegalArgumentException(\"No two sum solution\");\n\
    }\n\
}\n";

var javaScriptSource = "console.log(\"hello, world\");\n";

var ocamlSource = "print_endline \"hello, world\";;\n";

var octaveSource = "printf(\"hello, world\\n\");\n";

var pascalSource = "\
program Hello;\n\
begin\n\
    writeln ('hello, world')\n\
end.\n";

var pythonSource = "print(\"hello, world\")\n";

var rubySource = "puts \"hello, world\"\n";

var rustSource = "\
fn main() {\n\
    println!(\"hello, world\");\n\
}\n"

var textSource = "hello, world\n";

export const SOURCE = {
  1: bashSource,
  2: bashSource,
  3: basicSource,
  4: cSource,
  5: cSource,
  6: cSource,
  7: cSource,
  8: cSource,
  9: cSource,
 10: cppSource,
 11: cppSource,
 12: cppSource,
 13: cppSource,
 14: cppSource,
 15: cppSource,
 16: csharpSource,
 17: csharpSource,
 18: clojureSource,
 19: crystalSource,
 20: elixirSource,
 21: erlangSource,
 22: goSource,
 23: haskellSource,
 24: haskellSource,
 25: insectSource,
 26: javaSource,
 27: javaSource,
 28: javaSource,
 29: javaScriptSource,
 30: javaScriptSource,
 31: ocamlSource,
 32: octaveSource,
 33: pascalSource,
 34: pythonSource,
 35: pythonSource,
 36: pythonSource,
 37: pythonSource,
 38: rubySource,
 39: rubySource,
 40: rubySource,
 41: rubySource,
 42: rustSource,
 43: textSource
};

var mainJavaSource = "\
import java.io.*;\n\
import java.util.*;\n\
public class Main {\n\
    public static int[] stringToIntegerArray(String input) {\n\
        input = input.trim();\n\
        input = input.substring(1, input.length() - 1);\n\
        if (input.length() == 0) {\n\
          return new int[0];\n\
        }\n\
        String[] parts = input.split(\",\");\n\
        int[] output = new int[parts.length];\n\
        for(int index = 0; index < parts.length; index++) {\n\
            String part = parts[index].trim();\n\
            output[index] = Integer.parseInt(part);\n\
        }\n\
        return output;\n\
    }\n\
    public static String integerArrayToString(int[] nums, int length) { \n\
        if (length == 0) { \n\
            return \"[]\"; \n\
        }\n\
        String result = \"\";\n\
        for(int index = 0; index < length; index++) {\n\
            int number = nums[index];\n\
            result += Integer.toString(number) + \", \"; \n\
        }\n\
        return \"[\" + result.substring(0, result.length() - 2) + \"]\";\n\
    }\n\
    public static String integerArrayToString(int[] nums) {\n\
        return integerArrayToString(nums, nums.length);\n\
    }\n\
    public static void main(String[] args) throws IOException { \n\
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));\n\
        String line; \n\
        while ((line = in.readLine()) != null) { \n\
            int[] nums = stringToIntegerArray(line); \n\
            line = in.readLine();\n\
            int target = Integer.parseInt(line);\n\
            int[] ret = new Solution().twoSum(nums, target);\n\
            String out = integerArrayToString(ret);\n\
            System.out.print(out);\n\
        }\n\
    }\n\
}\n";
export const MAIN = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
   10: "",
   11: "",
   12: "",
   13: "",
   14: "",
   15: "",
   16: "",
   17: "",
   18: "",
   19: "",
   20: "",
   21: "",
   22: "",
   23: "",
   24: "",
   25: "",
   26: mainJavaSource,
   27: mainJavaSource,
   28: mainJavaSource,
   29: "",
   30: "",
   31: "",
   32: "",
   33: "",
   34: "",
   35: "",
   36: "",
   37: "",
   38: "",
   39: "",
   40: "",
   41: "",
   42: "",
   43: ""
}
// export const INPUT = "[1, 2, 3, 4, 5]\n9\n[2, 7, 11, 15]\n9\n[1, 2, 3, 4, 5]\n9\n[1, 2, 3, 4, 5]\n9\n";
export const INPUT = "[1, 2, 3, 4, 5]\n9";
export const OUPUT = "[3, 4]";
// export const OUPUT = "[3, 4][0, 1][3, 4][3, 4]"