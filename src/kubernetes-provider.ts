// https://www.terraform.io/docs/providers/kubernetes/r/kubernetes_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesProviderConfig {
  /** PEM-encoded client certificate for TLS authentication. */
  readonly clientCertificate?: string;
  /** PEM-encoded client certificate key for TLS authentication. */
  readonly clientKey?: string;
  /** PEM-encoded root certificates bundle for TLS authentication. */
  readonly clusterCaCertificate?: string;
  readonly configContext?: string;
  readonly configContextAuthInfo?: string;
  readonly configContextCluster?: string;
  /** Path to the kube config file, defaults to ~/.kube/config */
  readonly configPath?: string;
  /** The hostname (in form of URI) of Kubernetes master. */
  readonly host?: string;
  /** Whether server should be accessed without verifying the TLS certificate. */
  readonly insecure?: boolean;
  /** Load local kubeconfig. */
  readonly loadConfigFile?: boolean;
  /** The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. */
  readonly password?: string;
  /** Token to authenticate an service account */
  readonly token?: string;
  /** The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. */
  readonly username?: string;
  /** Alias name */
  readonly alias?: string;
  /** exec block */
  readonly exec?: KubernetesProviderExec[];
}
export interface KubernetesProviderExec {
  readonly apiVersion: string;
  readonly args?: string[];
  readonly command: string;
  readonly env?: { [key: string]: string };
}

function kubernetesProviderExecToTerraform(struct?: KubernetesProviderExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    env: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.env),
  }
}


// Resource

export class KubernetesProvider extends cdktf.TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KubernetesProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersionConstraint: '~> 1.0'
      },
      terraformProviderSource: 'kubernetes'
    });
    this._clientCertificate = config.clientCertificate;
    this._clientKey = config.clientKey;
    this._clusterCaCertificate = config.clusterCaCertificate;
    this._configContext = config.configContext;
    this._configContextAuthInfo = config.configContextAuthInfo;
    this._configContextCluster = config.configContextCluster;
    this._configPath = config.configPath;
    this._host = config.host;
    this._insecure = config.insecure;
    this._loadConfigFile = config.loadConfigFile;
    this._password = config.password;
    this._token = config.token;
    this._username = config.username;
    this._alias = config.alias;
    this._exec = config.exec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string;
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public set clientCertificate(value: string  | undefined) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string;
  public get clientKey() {
    return this._clientKey;
  }
  public set clientKey(value: string  | undefined) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey
  }

  // cluster_ca_certificate - computed: false, optional: true, required: false
  private _clusterCaCertificate?: string;
  public get clusterCaCertificate() {
    return this._clusterCaCertificate;
  }
  public set clusterCaCertificate(value: string  | undefined) {
    this._clusterCaCertificate = value;
  }
  public resetClusterCaCertificate() {
    this._clusterCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaCertificateInput() {
    return this._clusterCaCertificate
  }

  // config_context - computed: false, optional: true, required: false
  private _configContext?: string;
  public get configContext() {
    return this._configContext;
  }
  public set configContext(value: string  | undefined) {
    this._configContext = value;
  }
  public resetConfigContext() {
    this._configContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextInput() {
    return this._configContext
  }

  // config_context_auth_info - computed: false, optional: true, required: false
  private _configContextAuthInfo?: string;
  public get configContextAuthInfo() {
    return this._configContextAuthInfo;
  }
  public set configContextAuthInfo(value: string  | undefined) {
    this._configContextAuthInfo = value;
  }
  public resetConfigContextAuthInfo() {
    this._configContextAuthInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextAuthInfoInput() {
    return this._configContextAuthInfo
  }

  // config_context_cluster - computed: false, optional: true, required: false
  private _configContextCluster?: string;
  public get configContextCluster() {
    return this._configContextCluster;
  }
  public set configContextCluster(value: string  | undefined) {
    this._configContextCluster = value;
  }
  public resetConfigContextCluster() {
    this._configContextCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextClusterInput() {
    return this._configContextCluster
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string;
  public get configPath() {
    return this._configPath;
  }
  public set configPath(value: string  | undefined) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath
  }

  // host - computed: false, optional: true, required: false
  private _host?: string;
  public get host() {
    return this._host;
  }
  public set host(value: string  | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean;
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean  | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure
  }

  // load_config_file - computed: false, optional: true, required: false
  private _loadConfigFile?: boolean;
  public get loadConfigFile() {
    return this._loadConfigFile;
  }
  public set loadConfigFile(value: boolean  | undefined) {
    this._loadConfigFile = value;
  }
  public resetLoadConfigFile() {
    this._loadConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadConfigFileInput() {
    return this._loadConfigFile
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this._password;
  }
  public set password(value: string  | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // token - computed: false, optional: true, required: false
  private _token?: string;
  public get token() {
    return this._token;
  }
  public set token(value: string  | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token
  }

  // username - computed: false, optional: true, required: false
  private _username?: string;
  public get username() {
    return this._username;
  }
  public set username(value: string  | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string  | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: KubernetesProviderExec[];
  public get exec() {
    return this._exec;
  }
  public set exec(value: KubernetesProviderExec[]  | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      client_key: cdktf.stringToTerraform(this._clientKey),
      cluster_ca_certificate: cdktf.stringToTerraform(this._clusterCaCertificate),
      config_context: cdktf.stringToTerraform(this._configContext),
      config_context_auth_info: cdktf.stringToTerraform(this._configContextAuthInfo),
      config_context_cluster: cdktf.stringToTerraform(this._configContextCluster),
      config_path: cdktf.stringToTerraform(this._configPath),
      host: cdktf.stringToTerraform(this._host),
      insecure: cdktf.booleanToTerraform(this._insecure),
      load_config_file: cdktf.booleanToTerraform(this._loadConfigFile),
      password: cdktf.stringToTerraform(this._password),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      exec: cdktf.listMapper(kubernetesProviderExecToTerraform)(this._exec),
    };
  }
}
