---
layout: post
title: Flashing Firmware to ARM microcontrollers using OpenOCD
excerpt_separator: <!--more-->
---


Althought it is relatively easy to compile code as a part of a build system for your ARM microcontroller using GCC and Make,
It is much more confusing about which toolchain to use to flash a firmware binary to your microcontroller, and debug it.
The Segger J-Link seems to be the preferred product, as it is a hardware programmer( i.e flasher/burner ) that is vendor-independent and also serves as a debugger, It is also Linux compatible, which adds to its popularity, altough it is expensive( the base model starts at $200 ), and the cheaper J-Link EDU lines come with restrictions.
<!--more-->

<figure>
    <img src="https://canusb-shop.com/image/cache/data/canshop_images/Segger-JLINK-BASE-500x500.jpg">
    <figcaption>A Segger J-Link BASE </figcaption>
</figure>
 Luckily, we have OpenOCD to the rescue,which uses the On Chip Debugger on most microcontroller boards toboth flash and debug ARM microcontrollers.However, there is sparse and scattered documentation about how to use it, which is why i have written this guide.<br>
**Note** : The TM4C123GXL evaluation board is being used for the purposes of this guide, but other well-known ARM microcontrollers like STM32 + attached ICDI debugger can also be used.<br>
First, we need to download and install OpenOCD
```
git clone git://git.code.sf.net/p/openocd/code openocd.git
cd openocd.git
./bootstrap
./configure --prefix=/usr --enable-maintainer-mode --enable-stlink 
--enable-ti-icdi
make
sudo make install
```
Both the `--enable-stlink` and `--enable-ti-icdi` options here are specified to include support for these two features in your openOCD install, altough i have seen these features being activated automatically also

After the installation, connect your micrcocontroller evaluation board( or your eval board + its hardware programmer like an st-link ) to your PC, and run this line
```
sudo openocd -f /usr/share/openocd/scripts/board/ek-tm4c123gxl.cfg -c "program bin/main.bin reset" 
```
Here you start openocd by specifying it a config file of your microcontroller board, mine is the TM4C123GXL so i used the `ek-tm4c123gxl.cfg` file.
the `-c` option allows you to specify commands to openOCD like `"program bin/main.bin reset"` in this case, where `program bin/main.bin` tells OpenOCD to flash `main.bin` to the board, and `reset` tells it to reset the board, you can also specify an `exit` command to make openOCD exit after it has finished flashing, else it will start a `GDB` debug server after it is done, and will be active in the current terminal<br>
You have to use Ctrl + D to quit OpenOCD, this will also shut down the GDB server

