import sys, subprocess, pyperclip
param = 1
""" os.system(f'pwgen {param}') """
""" os.system won't let read stdout use subprocess.check_output instead"""
""" os.system('pwgen %s' %(sys.argv[1])) """
""" result = subprocess.check_output(['pwgen', '$s' %([sys.argv[1]])]) """
""" result = subprocess.check_output(['pwgen', sys.argv[1]]) """

result = subprocess.run(['pwgen', f'{sys.argv[1]}'], stdout=subprocess.PIPE)
print(result.stdout.decode('utf-8'))
pyperclip.copy(result.stdout.decode('utf-8').strip())
