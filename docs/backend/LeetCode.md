# LeetCode题解

### 14、最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 `""`。

示例1：

```
输入: ["flower","flow","flight"]
输出: "fl"
```

示例2：

```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

我的思路：

> 首先查找前两个的公共前缀，得到的结果再跟第三个比较公共前缀，这样依次比较就可以得到所有元素的公共前缀。考虑一下边界情况，数组为null或者数组长度为0返回空字符串；在两两比较的过程当中，如果没有公共前缀，提前返回空字符串。

Java实现：

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";
        String result = strs[0];
        for (int i = 1; i < strs.length; i++) {
            String temp = getCommonPrefix(result, strs[i]);
            if(temp.equals("")) return "";
            result = temp;
        }
        return result;
    }
    public String getCommonPrefix(String first, String second){
        StringBuilder s = new StringBuilder();
        int length = Math.min(first.length(), second.length());
        for (int i = 0; i < length; i++) {
            if (first.charAt(i) == second.charAt(i)) {
                s.append(first.charAt(i));
            } else {
                break;
            }
        }
        return s.toString();
    }
}
```

执行结果：

![](https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/44JLZf-YyR2v2.png)

