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
public class Main {\n\
    public static void main(String[] args) {\n\
        System.out.println(\"hello, world\");\n\
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
