// https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesProviderConfig {
  /**
  * PEM-encoded client certificate for TLS authentication.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#client_certificate KubernetesProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded client certificate key for TLS authentication.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#client_key KubernetesProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * PEM-encoded root certificates bundle for TLS authentication.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#cluster_ca_certificate KubernetesProvider#cluster_ca_certificate}
  */
  readonly clusterCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#config_context KubernetesProvider#config_context}
  */
  readonly configContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}
  */
  readonly configContextAuthInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#config_context_cluster KubernetesProvider#config_context_cluster}
  */
  readonly configContextCluster?: string;
  /**
  * Path to the kube config file. Can be set with KUBE_CONFIG_PATH.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#config_path KubernetesProvider#config_path}
  */
  readonly configPath?: string;
  /**
  * A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#config_paths KubernetesProvider#config_paths}
  */
  readonly configPaths?: string[];
  /**
  * The hostname (in form of URI) of Kubernetes master.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#host KubernetesProvider#host}
  */
  readonly host?: string;
  /**
  * List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations. Each item is a regular expression.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#ignore_annotations KubernetesProvider#ignore_annotations}
  */
  readonly ignoreAnnotations?: string[];
  /**
  * List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels. Each item is a regular expression.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#ignore_labels KubernetesProvider#ignore_labels}
  */
  readonly ignoreLabels?: string[];
  /**
  * Whether server should be accessed without verifying the TLS certificate.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#insecure KubernetesProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#password KubernetesProvider#password}
  */
  readonly password?: string;
  /**
  * URL to the proxy to be used for all API requests
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#proxy_url KubernetesProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Token to authenticate an service account
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#token KubernetesProvider#token}
  */
  readonly token?: string;
  /**
  * The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#username KubernetesProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#alias KubernetesProvider#alias}
  */
  readonly alias?: string;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#exec KubernetesProvider#exec}
  */
  readonly exec?: KubernetesProviderExec;
  /**
  * experiments block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#experiments KubernetesProvider#experiments}
  */
  readonly experiments?: KubernetesProviderExperiments;
}
export interface KubernetesProviderExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#api_version KubernetesProvider#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#args KubernetesProvider#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#command KubernetesProvider#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#env KubernetesProvider#env}
  */
  readonly env?: { [key: string]: string };
}

export function kubernetesProviderExecToTerraform(struct?: KubernetesProviderExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
  }
}

export interface KubernetesProviderExperiments {
  /**
  * Enable the `kubernetes_manifest` resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs#manifest_resource KubernetesProvider#manifest_resource}
  */
  readonly manifestResource?: boolean | cdktf.IResolvable;
}

export function kubernetesProviderExperimentsToTerraform(struct?: KubernetesProviderExperiments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manifest_resource: cdktf.booleanToTerraform(struct!.manifestResource),
  }
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs kubernetes}
*/
export class KubernetesProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KubernetesProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.20.0',
        providerVersionConstraint: '~> 2.0'
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
    this._configPaths = config.configPaths;
    this._host = config.host;
    this._ignoreAnnotations = config.ignoreAnnotations;
    this._ignoreLabels = config.ignoreLabels;
    this._insecure = config.insecure;
    this._password = config.password;
    this._proxyUrl = config.proxyUrl;
    this._token = config.token;
    this._username = config.username;
    this._alias = config.alias;
    this._exec = config.exec;
    this._experiments = config.experiments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public set clientCertificate(value: string | undefined) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this._clientKey;
  }
  public set clientKey(value: string | undefined) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // cluster_ca_certificate - computed: false, optional: true, required: false
  private _clusterCaCertificate?: string; 
  public get clusterCaCertificate() {
    return this._clusterCaCertificate;
  }
  public set clusterCaCertificate(value: string | undefined) {
    this._clusterCaCertificate = value;
  }
  public resetClusterCaCertificate() {
    this._clusterCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaCertificateInput() {
    return this._clusterCaCertificate;
  }

  // config_context - computed: false, optional: true, required: false
  private _configContext?: string; 
  public get configContext() {
    return this._configContext;
  }
  public set configContext(value: string | undefined) {
    this._configContext = value;
  }
  public resetConfigContext() {
    this._configContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextInput() {
    return this._configContext;
  }

  // config_context_auth_info - computed: false, optional: true, required: false
  private _configContextAuthInfo?: string; 
  public get configContextAuthInfo() {
    return this._configContextAuthInfo;
  }
  public set configContextAuthInfo(value: string | undefined) {
    this._configContextAuthInfo = value;
  }
  public resetConfigContextAuthInfo() {
    this._configContextAuthInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextAuthInfoInput() {
    return this._configContextAuthInfo;
  }

  // config_context_cluster - computed: false, optional: true, required: false
  private _configContextCluster?: string; 
  public get configContextCluster() {
    return this._configContextCluster;
  }
  public set configContextCluster(value: string | undefined) {
    this._configContextCluster = value;
  }
  public resetConfigContextCluster() {
    this._configContextCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextClusterInput() {
    return this._configContextCluster;
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string; 
  public get configPath() {
    return this._configPath;
  }
  public set configPath(value: string | undefined) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

  // config_paths - computed: false, optional: true, required: false
  private _configPaths?: string[]; 
  public get configPaths() {
    return this._configPaths;
  }
  public set configPaths(value: string[] | undefined) {
    this._configPaths = value;
  }
  public resetConfigPaths() {
    this._configPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathsInput() {
    return this._configPaths;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ignore_annotations - computed: false, optional: true, required: false
  private _ignoreAnnotations?: string[]; 
  public get ignoreAnnotations() {
    return this._ignoreAnnotations;
  }
  public set ignoreAnnotations(value: string[] | undefined) {
    this._ignoreAnnotations = value;
  }
  public resetIgnoreAnnotations() {
    this._ignoreAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAnnotationsInput() {
    return this._ignoreAnnotations;
  }

  // ignore_labels - computed: false, optional: true, required: false
  private _ignoreLabels?: string[]; 
  public get ignoreLabels() {
    return this._ignoreLabels;
  }
  public set ignoreLabels(value: string[] | undefined) {
    this._ignoreLabels = value;
  }
  public resetIgnoreLabels() {
    this._ignoreLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLabelsInput() {
    return this._ignoreLabels;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this._proxyUrl;
  }
  public set proxyUrl(value: string | undefined) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: KubernetesProviderExec; 
  public get exec() {
    return this._exec;
  }
  public set exec(value: KubernetesProviderExec | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // experiments - computed: false, optional: true, required: false
  private _experiments?: KubernetesProviderExperiments; 
  public get experiments() {
    return this._experiments;
  }
  public set experiments(value: KubernetesProviderExperiments | undefined) {
    this._experiments = value;
  }
  public resetExperiments() {
    this._experiments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentsInput() {
    return this._experiments;
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
      config_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configPaths),
      host: cdktf.stringToTerraform(this._host),
      ignore_annotations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreAnnotations),
      ignore_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreLabels),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      exec: kubernetesProviderExecToTerraform(this._exec),
      experiments: kubernetesProviderExperimentsToTerraform(this._experiments),
    };
  }
}
