# `kubernetes_cluster_role_binding_v1`

Refer to the Terraform Registory for docs: [`kubernetes_cluster_role_binding_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1).

# `clusterRoleBindingV1` Submodule <a name="`clusterRoleBindingV1` Submodule" id="@cdktf/provider-kubernetes.clusterRoleBindingV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterRoleBindingV1 <a name="ClusterRoleBindingV1" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1 kubernetes_cluster_role_binding_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ClusterRoleBindingV1Metadata,
  role_ref: ClusterRoleBindingV1RoleRef,
  subject: typing.Union[IResolvable, typing.List[ClusterRoleBindingV1Subject]],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.roleRef">role_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a></code> | role_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.subject">subject</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]]</code> | subject block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#id ClusterRoleBindingV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#metadata ClusterRoleBindingV1#metadata}

---

##### `role_ref`<sup>Required</sup> <a name="role_ref" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.roleRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

role_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#role_ref ClusterRoleBindingV1#role_ref}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.subject"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]]

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#subject ClusterRoleBindingV1#subject}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#id ClusterRoleBindingV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef">put_role_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putSubject">put_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#annotations ClusterRoleBindingV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#generate_name ClusterRoleBindingV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#labels ClusterRoleBindingV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

##### `put_role_ref` <a name="put_role_ref" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef"></a>

```python
def put_role_ref(
  api_group: str,
  kind: str,
  name: str
) -> None
```

###### `api_group`<sup>Required</sup> <a name="api_group" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef.parameter.apiGroup"></a>

- *Type:* str

The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#api_group ClusterRoleBindingV1#api_group}

---

###### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef.parameter.kind"></a>

- *Type:* str

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#kind ClusterRoleBindingV1#kind}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef.parameter.name"></a>

- *Type:* str

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

##### `put_subject` <a name="put_subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putSubject"></a>

```python
def put_subject(
  value: typing.Union[IResolvable, typing.List[ClusterRoleBindingV1Subject]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putSubject.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference">ClusterRoleBindingV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRef">role_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference">ClusterRoleBindingV1RoleRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList">ClusterRoleBindingV1SubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRefInput">role_ref_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subjectInput">subject_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadata"></a>

```python
metadata: ClusterRoleBindingV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference">ClusterRoleBindingV1MetadataOutputReference</a>

---

##### `role_ref`<sup>Required</sup> <a name="role_ref" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRef"></a>

```python
role_ref: ClusterRoleBindingV1RoleRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference">ClusterRoleBindingV1RoleRefOutputReference</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subject"></a>

```python
subject: ClusterRoleBindingV1SubjectList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList">ClusterRoleBindingV1SubjectList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadataInput"></a>

```python
metadata_input: ClusterRoleBindingV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

---

##### `role_ref_input`<sup>Optional</sup> <a name="role_ref_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRefInput"></a>

```python
role_ref_input: ClusterRoleBindingV1RoleRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subjectInput"></a>

```python
subject_input: typing.Union[IResolvable, typing.List[ClusterRoleBindingV1Subject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterRoleBindingV1Config <a name="ClusterRoleBindingV1Config" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ClusterRoleBindingV1Metadata,
  role_ref: ClusterRoleBindingV1RoleRef,
  subject: typing.Union[IResolvable, typing.List[ClusterRoleBindingV1Subject]],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.roleRef">role_ref</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a></code> | role_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.subject">subject</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]]</code> | subject block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#id ClusterRoleBindingV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.metadata"></a>

```python
metadata: ClusterRoleBindingV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#metadata ClusterRoleBindingV1#metadata}

---

##### `role_ref`<sup>Required</sup> <a name="role_ref" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.roleRef"></a>

```python
role_ref: ClusterRoleBindingV1RoleRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

role_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#role_ref ClusterRoleBindingV1#role_ref}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.subject"></a>

```python
subject: typing.Union[IResolvable, typing.List[ClusterRoleBindingV1Subject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]]

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#subject ClusterRoleBindingV1#subject}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#id ClusterRoleBindingV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ClusterRoleBindingV1Metadata <a name="ClusterRoleBindingV1Metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1Metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#annotations ClusterRoleBindingV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#generate_name ClusterRoleBindingV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#labels ClusterRoleBindingV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

### ClusterRoleBindingV1RoleRef <a name="ClusterRoleBindingV1RoleRef" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1RoleRef(
  api_group: str,
  kind: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.apiGroup">api_group</a></code> | <code>str</code> | The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.kind">kind</a></code> | <code>str</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.name">name</a></code> | <code>str</code> | The name of the User to bind to. |

---

##### `api_group`<sup>Required</sup> <a name="api_group" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.apiGroup"></a>

```python
api_group: str
```

- *Type:* str

The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#api_group ClusterRoleBindingV1#api_group}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.kind"></a>

```python
kind: str
```

- *Type:* str

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#kind ClusterRoleBindingV1#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

### ClusterRoleBindingV1Subject <a name="ClusterRoleBindingV1Subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1Subject(
  kind: str,
  name: str,
  api_group: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.kind">kind</a></code> | <code>str</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.name">name</a></code> | <code>str</code> | The name of the resource to bind to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.apiGroup">api_group</a></code> | <code>str</code> | The API group of the subject resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.namespace">namespace</a></code> | <code>str</code> | The Namespace of the subject resource. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.kind"></a>

```python
kind: str
```

- *Type:* str

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#kind ClusterRoleBindingV1#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the resource to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

##### `api_group`<sup>Optional</sup> <a name="api_group" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.apiGroup"></a>

```python
api_group: str
```

- *Type:* str

The API group of the subject resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#api_group ClusterRoleBindingV1#api_group}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The Namespace of the subject resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role_binding_v1#namespace ClusterRoleBindingV1#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterRoleBindingV1MetadataOutputReference <a name="ClusterRoleBindingV1MetadataOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: ClusterRoleBindingV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

---


### ClusterRoleBindingV1RoleRefOutputReference <a name="ClusterRoleBindingV1RoleRefOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroupInput">api_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroup">api_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_group_input`<sup>Optional</sup> <a name="api_group_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroupInput"></a>

```python
api_group_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `api_group`<sup>Required</sup> <a name="api_group" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroup"></a>

```python
api_group: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.internalValue"></a>

```python
internal_value: ClusterRoleBindingV1RoleRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

---


### ClusterRoleBindingV1SubjectList <a name="ClusterRoleBindingV1SubjectList" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1SubjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClusterRoleBindingV1SubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClusterRoleBindingV1Subject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]]

---


### ClusterRoleBindingV1SubjectOutputReference <a name="ClusterRoleBindingV1SubjectOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_binding_v1

clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetApiGroup">reset_api_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_group` <a name="reset_api_group" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetApiGroup"></a>

```python
def reset_api_group() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroupInput">api_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroup">api_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_group_input`<sup>Optional</sup> <a name="api_group_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroupInput"></a>

```python
api_group_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `api_group`<sup>Required</sup> <a name="api_group" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroup"></a>

```python
api_group: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClusterRoleBindingV1Subject]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>]

---



