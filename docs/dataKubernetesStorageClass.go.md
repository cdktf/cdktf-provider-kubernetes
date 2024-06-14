# `dataKubernetesStorageClass` Submodule <a name="`dataKubernetesStorageClass` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesStorageClass <a name="DataKubernetesStorageClass" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class kubernetes_storage_class}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

datakubernetesstorageclass.NewDataKubernetesStorageClass(scope Construct, id *string, config DataKubernetesStorageClassConfig) DataKubernetesStorageClass
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig">DataKubernetesStorageClassConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig">DataKubernetesStorageClassConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies">PutAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowedTopologies">ResetAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowVolumeExpansion">ResetAllowVolumeExpansion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetReclaimPolicy">ResetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetVolumeBindingMode">ResetVolumeBindingMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAllowedTopologies` <a name="PutAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies"></a>

```go
func PutAllowedTopologies(value DataKubernetesStorageClassAllowedTopologies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata"></a>

```go
func PutMetadata(value DataKubernetesStorageClassMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---

##### `ResetAllowedTopologies` <a name="ResetAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowedTopologies"></a>

```go
func ResetAllowedTopologies()
```

##### `ResetAllowVolumeExpansion` <a name="ResetAllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowVolumeExpansion"></a>

```go
func ResetAllowVolumeExpansion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetId"></a>

```go
func ResetId()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetReclaimPolicy` <a name="ResetReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetReclaimPolicy"></a>

```go
func ResetReclaimPolicy()
```

##### `ResetVolumeBindingMode` <a name="ResetVolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetVolumeBindingMode"></a>

```go
func ResetVolumeBindingMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesStorageClass resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

datakubernetesstorageclass.DataKubernetesStorageClass_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

datakubernetesstorageclass.DataKubernetesStorageClass_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

datakubernetesstorageclass.DataKubernetesStorageClass_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

datakubernetesstorageclass.DataKubernetesStorageClass_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataKubernetesStorageClass resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataKubernetesStorageClass to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataKubernetesStorageClass that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesStorageClass to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologies">AllowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference">DataKubernetesStorageClassAllowedTopologiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference">DataKubernetesStorageClassMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.storageProvisioner">StorageProvisioner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologiesInput">AllowedTopologiesInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansionInput">AllowVolumeExpansionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptionsInput">MountOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicyInput">ReclaimPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingModeInput">VolumeBindingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansion">AllowVolumeExpansion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingMode">VolumeBindingMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowedTopologies`<sup>Required</sup> <a name="AllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologies"></a>

```go
func AllowedTopologies() DataKubernetesStorageClassAllowedTopologiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference">DataKubernetesStorageClassAllowedTopologiesOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadata"></a>

```go
func Metadata() DataKubernetesStorageClassMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference">DataKubernetesStorageClassMetadataOutputReference</a>

---

##### `StorageProvisioner`<sup>Required</sup> <a name="StorageProvisioner" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.storageProvisioner"></a>

```go
func StorageProvisioner() *string
```

- *Type:* *string

---

##### `AllowedTopologiesInput`<sup>Optional</sup> <a name="AllowedTopologiesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologiesInput"></a>

```go
func AllowedTopologiesInput() DataKubernetesStorageClassAllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---

##### `AllowVolumeExpansionInput`<sup>Optional</sup> <a name="AllowVolumeExpansionInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansionInput"></a>

```go
func AllowVolumeExpansionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadataInput"></a>

```go
func MetadataInput() DataKubernetesStorageClassMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptionsInput"></a>

```go
func MountOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ReclaimPolicyInput`<sup>Optional</sup> <a name="ReclaimPolicyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicyInput"></a>

```go
func ReclaimPolicyInput() *string
```

- *Type:* *string

---

##### `VolumeBindingModeInput`<sup>Optional</sup> <a name="VolumeBindingModeInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingModeInput"></a>

```go
func VolumeBindingModeInput() *string
```

- *Type:* *string

---

##### `AllowVolumeExpansion`<sup>Required</sup> <a name="AllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansion"></a>

```go
func AllowVolumeExpansion() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptions"></a>

```go
func MountOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ReclaimPolicy`<sup>Required</sup> <a name="ReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicy"></a>

```go
func ReclaimPolicy() *string
```

- *Type:* *string

---

##### `VolumeBindingMode`<sup>Required</sup> <a name="VolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingMode"></a>

```go
func VolumeBindingMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesStorageClassAllowedTopologies <a name="DataKubernetesStorageClassAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

&datakubernetesstorageclass.DataKubernetesStorageClassAllowedTopologies {
	MatchLabelExpressions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.property.matchLabelExpressions">MatchLabelExpressions</a></code> | <code>interface{}</code> | match_label_expressions block. |

---

##### `MatchLabelExpressions`<sup>Optional</sup> <a name="MatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.property.matchLabelExpressions"></a>

```go
MatchLabelExpressions interface{}
```

- *Type:* interface{}

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#match_label_expressions DataKubernetesStorageClass#match_label_expressions}

---

### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

&datakubernetesstorageclass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.key">Key</a></code> | <code>*string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.values">Values</a></code> | <code>*[]*string</code> | An array of string values. One value must match the label to be selected. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#key DataKubernetesStorageClass#key}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of string values. One value must match the label to be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#values DataKubernetesStorageClass#values}

---

### DataKubernetesStorageClassConfig <a name="DataKubernetesStorageClassConfig" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

&datakubernetesstorageclass.DataKubernetesStorageClassConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata,
	AllowedTopologies: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies,
	AllowVolumeExpansion: interface{},
	Id: *string,
	MountOptions: *[]*string,
	Parameters: *map[string]*string,
	ReclaimPolicy: *string,
	VolumeBindingMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowedTopologies">AllowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowVolumeExpansion">AllowVolumeExpansion</a></code> | <code>interface{}</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#id DataKubernetesStorageClass#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>*string</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.volumeBindingMode">VolumeBindingMode</a></code> | <code>*string</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.metadata"></a>

```go
Metadata DataKubernetesStorageClassMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#metadata DataKubernetesStorageClass#metadata}

---

##### `AllowedTopologies`<sup>Optional</sup> <a name="AllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowedTopologies"></a>

```go
AllowedTopologies DataKubernetesStorageClassAllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#allowed_topologies DataKubernetesStorageClass#allowed_topologies}

---

##### `AllowVolumeExpansion`<sup>Optional</sup> <a name="AllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowVolumeExpansion"></a>

```go
AllowVolumeExpansion interface{}
```

- *Type:* interface{}

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#allow_volume_expansion DataKubernetesStorageClass#allow_volume_expansion}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#id DataKubernetesStorageClass#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.mountOptions"></a>

```go
MountOptions *[]*string
```

- *Type:* *[]*string

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#mount_options DataKubernetesStorageClass#mount_options}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#parameters DataKubernetesStorageClass#parameters}

---

##### `ReclaimPolicy`<sup>Optional</sup> <a name="ReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.reclaimPolicy"></a>

```go
ReclaimPolicy *string
```

- *Type:* *string

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#reclaim_policy DataKubernetesStorageClass#reclaim_policy}

---

##### `VolumeBindingMode`<sup>Optional</sup> <a name="VolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.volumeBindingMode"></a>

```go
VolumeBindingMode *string
```

- *Type:* *string

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#volume_binding_mode DataKubernetesStorageClass#volume_binding_mode}

---

### DataKubernetesStorageClassMetadata <a name="DataKubernetesStorageClassMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

&datakubernetesstorageclass.DataKubernetesStorageClassMetadata {
	Annotations: *map[string]*string,
	Labels: *map[string]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.name">Name</a></code> | <code>*string</code> | Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#annotations DataKubernetesStorageClass#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#labels DataKubernetesStorageClass#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/storage_class#name DataKubernetesStorageClass#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

datakubernetesstorageclass.NewDataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get"></a>

```go
func Get(index *f64) DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

datakubernetesstorageclass.NewDataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesStorageClassAllowedTopologiesOutputReference <a name="DataKubernetesStorageClassAllowedTopologiesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

datakubernetesstorageclass.NewDataKubernetesStorageClassAllowedTopologiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataKubernetesStorageClassAllowedTopologiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions">PutMatchLabelExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resetMatchLabelExpressions">ResetMatchLabelExpressions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchLabelExpressions` <a name="PutMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions"></a>

```go
func PutMatchLabelExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchLabelExpressions` <a name="ResetMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resetMatchLabelExpressions"></a>

```go
func ResetMatchLabelExpressions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressions">MatchLabelExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressionsInput">MatchLabelExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchLabelExpressions`<sup>Required</sup> <a name="MatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressions"></a>

```go
func MatchLabelExpressions() DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList</a>

---

##### `MatchLabelExpressionsInput`<sup>Optional</sup> <a name="MatchLabelExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressionsInput"></a>

```go
func MatchLabelExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataKubernetesStorageClassAllowedTopologies
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---


### DataKubernetesStorageClassMetadataOutputReference <a name="DataKubernetesStorageClassMetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/datakubernetesstorageclass"

datakubernetesstorageclass.NewDataKubernetesStorageClassMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataKubernetesStorageClassMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataKubernetesStorageClassMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---



