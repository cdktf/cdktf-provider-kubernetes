# `networkPolicyV1` Submodule <a name="`networkPolicyV1` Submodule" id="@cdktf/provider-kubernetes.networkPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPolicyV1 <a name="NetworkPolicyV1" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1 kubernetes_network_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1(Construct Scope, string Id, NetworkPolicyV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config">NetworkPolicyV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config">NetworkPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putMetadata"></a>

```csharp
private void PutMetadata(NetworkPolicyV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putSpec"></a>

```csharp
private void PutSpec(NetworkPolicyV1Spec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

NetworkPolicyV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

NetworkPolicyV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

NetworkPolicyV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

NetworkPolicyV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkPolicyV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference">NetworkPolicyV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference">NetworkPolicyV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.metadata"></a>

```csharp
public NetworkPolicyV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference">NetworkPolicyV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.spec"></a>

```csharp
public NetworkPolicyV1SpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference">NetworkPolicyV1SpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.metadataInput"></a>

```csharp
public NetworkPolicyV1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.specInput"></a>

```csharp
public NetworkPolicyV1Spec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPolicyV1Config <a name="NetworkPolicyV1Config" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    NetworkPolicyV1Metadata Metadata,
    NetworkPolicyV1Spec Spec,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#id NetworkPolicyV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.metadata"></a>

```csharp
public NetworkPolicyV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#metadata NetworkPolicyV1#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.spec"></a>

```csharp
public NetworkPolicyV1Spec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#spec NetworkPolicyV1#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#id NetworkPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NetworkPolicyV1Metadata <a name="NetworkPolicyV1Metadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the network policy that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the network policy. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the network policy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the network policy must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the network policy that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#annotations NetworkPolicyV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#generate_name NetworkPolicyV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the network policy.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#labels NetworkPolicyV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the network policy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#name NetworkPolicyV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the network policy must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#namespace NetworkPolicyV1#namespace}

---

### NetworkPolicyV1Spec <a name="NetworkPolicyV1Spec" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1Spec {
    NetworkPolicyV1SpecPodSelector PodSelector,
    string[] PolicyTypes,
    IResolvable|NetworkPolicyV1SpecEgress[] Egress = null,
    IResolvable|NetworkPolicyV1SpecIngress[] Ingress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.podSelector">PodSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a></code> | pod_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.policyTypes">PolicyTypes</a></code> | <code>string[]</code> | policyTypes is a list of rule types that the NetworkPolicy relates to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.egress">Egress</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]</code> | egress block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.ingress">Ingress</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]</code> | ingress block. |

---

##### `PodSelector`<sup>Required</sup> <a name="PodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.podSelector"></a>

```csharp
public NetworkPolicyV1SpecPodSelector PodSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a>

pod_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#pod_selector NetworkPolicyV1#pod_selector}

---

##### `PolicyTypes`<sup>Required</sup> <a name="PolicyTypes" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.policyTypes"></a>

```csharp
public string[] PolicyTypes { get; set; }
```

- *Type:* string[]

policyTypes is a list of rule types that the NetworkPolicy relates to.

Valid options are ["Ingress"], ["Egress"], or ["Ingress", "Egress"]. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#policy_types NetworkPolicyV1#policy_types}

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.egress"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgress[] Egress { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#egress NetworkPolicyV1#egress}

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.ingress"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngress[] Ingress { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#ingress NetworkPolicyV1#ingress}

---

### NetworkPolicyV1SpecEgress <a name="NetworkPolicyV1SpecEgress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgress {
    IResolvable|NetworkPolicyV1SpecEgressPorts[] Ports = null,
    IResolvable|NetworkPolicyV1SpecEgressTo[] To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress.property.ports">Ports</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress.property.to">To</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]</code> | to block. |

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress.property.ports"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressPorts[] Ports { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#ports NetworkPolicyV1#ports}

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress.property.to"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressTo[] To { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#to NetworkPolicyV1#to}

---

### NetworkPolicyV1SpecEgressPorts <a name="NetworkPolicyV1SpecEgressPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressPorts {
    double EndPort = null,
    string Port = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.endPort">EndPort</a></code> | <code>double</code> | endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.port">Port</a></code> | <code>string</code> | port represents the port on the given protocol. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.protocol">Protocol</a></code> | <code>string</code> | protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. |

---

##### `EndPort`<sup>Optional</sup> <a name="EndPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.endPort"></a>

```csharp
public double EndPort { get; set; }
```

- *Type:* double

endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy.

This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#end_port NetworkPolicyV1#end_port}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

port represents the port on the given protocol.

This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#port NetworkPolicyV1#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match.

If not specified, this field defaults to TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#protocol NetworkPolicyV1#protocol}

---

### NetworkPolicyV1SpecEgressTo <a name="NetworkPolicyV1SpecEgressTo" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressTo {
    NetworkPolicyV1SpecEgressToIpBlock IpBlock = null,
    NetworkPolicyV1SpecEgressToNamespaceSelector NamespaceSelector = null,
    NetworkPolicyV1SpecEgressToPodSelector PodSelector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.ipBlock">IpBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a></code> | ip_block block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.podSelector">PodSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a></code> | pod_selector block. |

---

##### `IpBlock`<sup>Optional</sup> <a name="IpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.ipBlock"></a>

```csharp
public NetworkPolicyV1SpecEgressToIpBlock IpBlock { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a>

ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#ip_block NetworkPolicyV1#ip_block}

---

##### `NamespaceSelector`<sup>Optional</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.namespaceSelector"></a>

```csharp
public NetworkPolicyV1SpecEgressToNamespaceSelector NamespaceSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#namespace_selector NetworkPolicyV1#namespace_selector}

---

##### `PodSelector`<sup>Optional</sup> <a name="PodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.podSelector"></a>

```csharp
public NetworkPolicyV1SpecEgressToPodSelector PodSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a>

pod_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#pod_selector NetworkPolicyV1#pod_selector}

---

### NetworkPolicyV1SpecEgressToIpBlock <a name="NetworkPolicyV1SpecEgressToIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToIpBlock {
    string Cidr = null,
    string[] Except = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock.property.cidr">Cidr</a></code> | <code>string</code> | cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64". |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock.property.except">Except</a></code> | <code>string[]</code> | except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#cidr NetworkPolicyV1#cidr}

---

##### `Except`<sup>Optional</sup> <a name="Except" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock.property.except"></a>

```csharp
public string[] Except { get; set; }
```

- *Type:* string[]

except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#except NetworkPolicyV1#except}

---

### NetworkPolicyV1SpecEgressToNamespaceSelector <a name="NetworkPolicyV1SpecEgressToNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToNamespaceSelector {
    IResolvable|NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions[] MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector.property.matchExpressions">MatchExpressions</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector.property.matchExpressions"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions[] MatchExpressions { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#match_expressions NetworkPolicyV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#match_labels NetworkPolicyV1#match_labels}

---

### NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions <a name="NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#key NetworkPolicyV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#operator NetworkPolicyV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#values NetworkPolicyV1#values}

---

### NetworkPolicyV1SpecEgressToPodSelector <a name="NetworkPolicyV1SpecEgressToPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToPodSelector {
    IResolvable|NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions[] MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector.property.matchExpressions">MatchExpressions</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector.property.matchExpressions"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions[] MatchExpressions { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#match_expressions NetworkPolicyV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#match_labels NetworkPolicyV1#match_labels}

---

### NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions <a name="NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#key NetworkPolicyV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#operator NetworkPolicyV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#values NetworkPolicyV1#values}

---

### NetworkPolicyV1SpecIngress <a name="NetworkPolicyV1SpecIngress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngress {
    IResolvable|NetworkPolicyV1SpecIngressFrom[] From = null,
    IResolvable|NetworkPolicyV1SpecIngressPorts[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress.property.from">From</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]</code> | from block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress.property.ports">Ports</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]</code> | ports block. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress.property.from"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFrom[] From { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#from NetworkPolicyV1#from}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress.property.ports"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressPorts[] Ports { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#ports NetworkPolicyV1#ports}

---

### NetworkPolicyV1SpecIngressFrom <a name="NetworkPolicyV1SpecIngressFrom" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFrom {
    NetworkPolicyV1SpecIngressFromIpBlock IpBlock = null,
    NetworkPolicyV1SpecIngressFromNamespaceSelector NamespaceSelector = null,
    NetworkPolicyV1SpecIngressFromPodSelector PodSelector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.ipBlock">IpBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a></code> | ip_block block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.podSelector">PodSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a></code> | pod_selector block. |

---

##### `IpBlock`<sup>Optional</sup> <a name="IpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.ipBlock"></a>

```csharp
public NetworkPolicyV1SpecIngressFromIpBlock IpBlock { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a>

ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#ip_block NetworkPolicyV1#ip_block}

---

##### `NamespaceSelector`<sup>Optional</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.namespaceSelector"></a>

```csharp
public NetworkPolicyV1SpecIngressFromNamespaceSelector NamespaceSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#namespace_selector NetworkPolicyV1#namespace_selector}

---

##### `PodSelector`<sup>Optional</sup> <a name="PodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.podSelector"></a>

```csharp
public NetworkPolicyV1SpecIngressFromPodSelector PodSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a>

pod_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#pod_selector NetworkPolicyV1#pod_selector}

---

### NetworkPolicyV1SpecIngressFromIpBlock <a name="NetworkPolicyV1SpecIngressFromIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromIpBlock {
    string Cidr = null,
    string[] Except = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock.property.cidr">Cidr</a></code> | <code>string</code> | cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64". |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock.property.except">Except</a></code> | <code>string[]</code> | except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#cidr NetworkPolicyV1#cidr}

---

##### `Except`<sup>Optional</sup> <a name="Except" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock.property.except"></a>

```csharp
public string[] Except { get; set; }
```

- *Type:* string[]

except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#except NetworkPolicyV1#except}

---

### NetworkPolicyV1SpecIngressFromNamespaceSelector <a name="NetworkPolicyV1SpecIngressFromNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromNamespaceSelector {
    IResolvable|NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions[] MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector.property.matchExpressions">MatchExpressions</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector.property.matchExpressions"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions[] MatchExpressions { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#match_expressions NetworkPolicyV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#match_labels NetworkPolicyV1#match_labels}

---

### NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions <a name="NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#key NetworkPolicyV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#operator NetworkPolicyV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#values NetworkPolicyV1#values}

---

### NetworkPolicyV1SpecIngressFromPodSelector <a name="NetworkPolicyV1SpecIngressFromPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromPodSelector {
    IResolvable|NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions[] MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector.property.matchExpressions">MatchExpressions</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector.property.matchExpressions"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions[] MatchExpressions { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#match_expressions NetworkPolicyV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#match_labels NetworkPolicyV1#match_labels}

---

### NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions <a name="NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#key NetworkPolicyV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#operator NetworkPolicyV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#values NetworkPolicyV1#values}

---

### NetworkPolicyV1SpecIngressPorts <a name="NetworkPolicyV1SpecIngressPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressPorts {
    double EndPort = null,
    string Port = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.endPort">EndPort</a></code> | <code>double</code> | endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.port">Port</a></code> | <code>string</code> | port represents the port on the given protocol. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.protocol">Protocol</a></code> | <code>string</code> | protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. |

---

##### `EndPort`<sup>Optional</sup> <a name="EndPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.endPort"></a>

```csharp
public double EndPort { get; set; }
```

- *Type:* double

endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy.

This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#end_port NetworkPolicyV1#end_port}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

port represents the port on the given protocol.

This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#port NetworkPolicyV1#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match.

If not specified, this field defaults to TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#protocol NetworkPolicyV1#protocol}

---

### NetworkPolicyV1SpecPodSelector <a name="NetworkPolicyV1SpecPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecPodSelector {
    IResolvable|NetworkPolicyV1SpecPodSelectorMatchExpressions[] MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector.property.matchExpressions">MatchExpressions</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector.property.matchExpressions"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecPodSelectorMatchExpressions[] MatchExpressions { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#match_expressions NetworkPolicyV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#match_labels NetworkPolicyV1#match_labels}

---

### NetworkPolicyV1SpecPodSelectorMatchExpressions <a name="NetworkPolicyV1SpecPodSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecPodSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#key NetworkPolicyV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#operator NetworkPolicyV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/network_policy_v1#values NetworkPolicyV1#values}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkPolicyV1MetadataOutputReference <a name="NetworkPolicyV1MetadataOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.internalValue"></a>

```csharp
public NetworkPolicyV1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a>

---


### NetworkPolicyV1SpecEgressList <a name="NetworkPolicyV1SpecEgressList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.get"></a>

```csharp
private NetworkPolicyV1SpecEgressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgress[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]

---


### NetworkPolicyV1SpecEgressOutputReference <a name="NetworkPolicyV1SpecEgressOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putTo">PutTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putPorts"></a>

```csharp
private void PutPorts(IResolvable|NetworkPolicyV1SpecEgressPorts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putPorts.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]

---

##### `PutTo` <a name="PutTo" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putTo"></a>

```csharp
private void PutTo(IResolvable|NetworkPolicyV1SpecEgressTo[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putTo.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]

---

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList">NetworkPolicyV1SpecEgressPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.to">To</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList">NetworkPolicyV1SpecEgressToList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.portsInput">PortsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.toInput">ToInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.ports"></a>

```csharp
public NetworkPolicyV1SpecEgressPortsList Ports { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList">NetworkPolicyV1SpecEgressPortsList</a>

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.to"></a>

```csharp
public NetworkPolicyV1SpecEgressToList To { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList">NetworkPolicyV1SpecEgressToList</a>

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.portsInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressPorts[] PortsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.toInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressTo[] ToInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgress InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>

---


### NetworkPolicyV1SpecEgressPortsList <a name="NetworkPolicyV1SpecEgressPortsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.get"></a>

```csharp
private NetworkPolicyV1SpecEgressPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressPorts[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]

---


### NetworkPolicyV1SpecEgressPortsOutputReference <a name="NetworkPolicyV1SpecEgressPortsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetEndPort">ResetEndPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPort` <a name="ResetEndPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetEndPort"></a>

```csharp
private void ResetEndPort()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.endPortInput">EndPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.endPort">EndPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPortInput`<sup>Optional</sup> <a name="EndPortInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.endPortInput"></a>

```csharp
public double EndPortInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `EndPort`<sup>Required</sup> <a name="EndPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.endPort"></a>

```csharp
public double EndPort { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressPorts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>

---


### NetworkPolicyV1SpecEgressToIpBlockOutputReference <a name="NetworkPolicyV1SpecEgressToIpBlockOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToIpBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resetExcept">ResetExcept</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```

##### `ResetExcept` <a name="ResetExcept" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resetExcept"></a>

```csharp
private void ResetExcept()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.exceptInput">ExceptInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.except">Except</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `ExceptInput`<sup>Optional</sup> <a name="ExceptInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.exceptInput"></a>

```csharp
public string[] ExceptInput { get; }
```

- *Type:* string[]

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Except`<sup>Required</sup> <a name="Except" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.except"></a>

```csharp
public string[] Except { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.internalValue"></a>

```csharp
public NetworkPolicyV1SpecEgressToIpBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a>

---


### NetworkPolicyV1SpecEgressToList <a name="NetworkPolicyV1SpecEgressToList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.get"></a>

```csharp
private NetworkPolicyV1SpecEgressToOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressTo[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]

---


### NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList <a name="NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.get"></a>

```csharp
private NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]

---


### NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference <a name="NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>

---


### NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference <a name="NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(IResolvable|NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchExpressions"></a>

```csharp
public NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions[] MatchExpressionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.internalValue"></a>

```csharp
public NetworkPolicyV1SpecEgressToNamespaceSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a>

---


### NetworkPolicyV1SpecEgressToOutputReference <a name="NetworkPolicyV1SpecEgressToOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putIpBlock">PutIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putNamespaceSelector">PutNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putPodSelector">PutPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetIpBlock">ResetIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetNamespaceSelector">ResetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetPodSelector">ResetPodSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpBlock` <a name="PutIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putIpBlock"></a>

```csharp
private void PutIpBlock(NetworkPolicyV1SpecEgressToIpBlock Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a>

---

##### `PutNamespaceSelector` <a name="PutNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putNamespaceSelector"></a>

```csharp
private void PutNamespaceSelector(NetworkPolicyV1SpecEgressToNamespaceSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a>

---

##### `PutPodSelector` <a name="PutPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putPodSelector"></a>

```csharp
private void PutPodSelector(NetworkPolicyV1SpecEgressToPodSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putPodSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a>

---

##### `ResetIpBlock` <a name="ResetIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetIpBlock"></a>

```csharp
private void ResetIpBlock()
```

##### `ResetNamespaceSelector` <a name="ResetNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetNamespaceSelector"></a>

```csharp
private void ResetNamespaceSelector()
```

##### `ResetPodSelector` <a name="ResetPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetPodSelector"></a>

```csharp
private void ResetPodSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.ipBlock">IpBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference">NetworkPolicyV1SpecEgressToIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference">NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.podSelector">PodSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference">NetworkPolicyV1SpecEgressToPodSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.ipBlockInput">IpBlockInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.namespaceSelectorInput">NamespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.podSelectorInput">PodSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpBlock`<sup>Required</sup> <a name="IpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.ipBlock"></a>

```csharp
public NetworkPolicyV1SpecEgressToIpBlockOutputReference IpBlock { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference">NetworkPolicyV1SpecEgressToIpBlockOutputReference</a>

---

##### `NamespaceSelector`<sup>Required</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.namespaceSelector"></a>

```csharp
public NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference NamespaceSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference">NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference</a>

---

##### `PodSelector`<sup>Required</sup> <a name="PodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.podSelector"></a>

```csharp
public NetworkPolicyV1SpecEgressToPodSelectorOutputReference PodSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference">NetworkPolicyV1SpecEgressToPodSelectorOutputReference</a>

---

##### `IpBlockInput`<sup>Optional</sup> <a name="IpBlockInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.ipBlockInput"></a>

```csharp
public NetworkPolicyV1SpecEgressToIpBlock IpBlockInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a>

---

##### `NamespaceSelectorInput`<sup>Optional</sup> <a name="NamespaceSelectorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.namespaceSelectorInput"></a>

```csharp
public NetworkPolicyV1SpecEgressToNamespaceSelector NamespaceSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a>

---

##### `PodSelectorInput`<sup>Optional</sup> <a name="PodSelectorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.podSelectorInput"></a>

```csharp
public NetworkPolicyV1SpecEgressToPodSelector PodSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressTo InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>

---


### NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList <a name="NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.get"></a>

```csharp
private NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]

---


### NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference <a name="NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>

---


### NetworkPolicyV1SpecEgressToPodSelectorOutputReference <a name="NetworkPolicyV1SpecEgressToPodSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecEgressToPodSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(IResolvable|NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchExpressions"></a>

```csharp
public NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions[] MatchExpressionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.internalValue"></a>

```csharp
public NetworkPolicyV1SpecEgressToPodSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a>

---


### NetworkPolicyV1SpecIngressFromIpBlockOutputReference <a name="NetworkPolicyV1SpecIngressFromIpBlockOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromIpBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resetExcept">ResetExcept</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```

##### `ResetExcept` <a name="ResetExcept" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resetExcept"></a>

```csharp
private void ResetExcept()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.exceptInput">ExceptInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.except">Except</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `ExceptInput`<sup>Optional</sup> <a name="ExceptInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.exceptInput"></a>

```csharp
public string[] ExceptInput { get; }
```

- *Type:* string[]

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Except`<sup>Required</sup> <a name="Except" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.except"></a>

```csharp
public string[] Except { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.internalValue"></a>

```csharp
public NetworkPolicyV1SpecIngressFromIpBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a>

---


### NetworkPolicyV1SpecIngressFromList <a name="NetworkPolicyV1SpecIngressFromList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.get"></a>

```csharp
private NetworkPolicyV1SpecIngressFromOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFrom[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]

---


### NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList <a name="NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.get"></a>

```csharp
private NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]

---


### NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference <a name="NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>

---


### NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference <a name="NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(IResolvable|NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchExpressions"></a>

```csharp
public NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions[] MatchExpressionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.internalValue"></a>

```csharp
public NetworkPolicyV1SpecIngressFromNamespaceSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a>

---


### NetworkPolicyV1SpecIngressFromOutputReference <a name="NetworkPolicyV1SpecIngressFromOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putIpBlock">PutIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putNamespaceSelector">PutNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putPodSelector">PutPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetIpBlock">ResetIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetNamespaceSelector">ResetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetPodSelector">ResetPodSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpBlock` <a name="PutIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putIpBlock"></a>

```csharp
private void PutIpBlock(NetworkPolicyV1SpecIngressFromIpBlock Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a>

---

##### `PutNamespaceSelector` <a name="PutNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putNamespaceSelector"></a>

```csharp
private void PutNamespaceSelector(NetworkPolicyV1SpecIngressFromNamespaceSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a>

---

##### `PutPodSelector` <a name="PutPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putPodSelector"></a>

```csharp
private void PutPodSelector(NetworkPolicyV1SpecIngressFromPodSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putPodSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a>

---

##### `ResetIpBlock` <a name="ResetIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetIpBlock"></a>

```csharp
private void ResetIpBlock()
```

##### `ResetNamespaceSelector` <a name="ResetNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetNamespaceSelector"></a>

```csharp
private void ResetNamespaceSelector()
```

##### `ResetPodSelector` <a name="ResetPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetPodSelector"></a>

```csharp
private void ResetPodSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.ipBlock">IpBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference">NetworkPolicyV1SpecIngressFromIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference">NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.podSelector">PodSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference">NetworkPolicyV1SpecIngressFromPodSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.ipBlockInput">IpBlockInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.namespaceSelectorInput">NamespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.podSelectorInput">PodSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpBlock`<sup>Required</sup> <a name="IpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.ipBlock"></a>

```csharp
public NetworkPolicyV1SpecIngressFromIpBlockOutputReference IpBlock { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference">NetworkPolicyV1SpecIngressFromIpBlockOutputReference</a>

---

##### `NamespaceSelector`<sup>Required</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.namespaceSelector"></a>

```csharp
public NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference NamespaceSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference">NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference</a>

---

##### `PodSelector`<sup>Required</sup> <a name="PodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.podSelector"></a>

```csharp
public NetworkPolicyV1SpecIngressFromPodSelectorOutputReference PodSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference">NetworkPolicyV1SpecIngressFromPodSelectorOutputReference</a>

---

##### `IpBlockInput`<sup>Optional</sup> <a name="IpBlockInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.ipBlockInput"></a>

```csharp
public NetworkPolicyV1SpecIngressFromIpBlock IpBlockInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a>

---

##### `NamespaceSelectorInput`<sup>Optional</sup> <a name="NamespaceSelectorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.namespaceSelectorInput"></a>

```csharp
public NetworkPolicyV1SpecIngressFromNamespaceSelector NamespaceSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a>

---

##### `PodSelectorInput`<sup>Optional</sup> <a name="PodSelectorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.podSelectorInput"></a>

```csharp
public NetworkPolicyV1SpecIngressFromPodSelector PodSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFrom InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>

---


### NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList <a name="NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.get"></a>

```csharp
private NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]

---


### NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference <a name="NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>

---


### NetworkPolicyV1SpecIngressFromPodSelectorOutputReference <a name="NetworkPolicyV1SpecIngressFromPodSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressFromPodSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(IResolvable|NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchExpressions"></a>

```csharp
public NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions[] MatchExpressionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.internalValue"></a>

```csharp
public NetworkPolicyV1SpecIngressFromPodSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a>

---


### NetworkPolicyV1SpecIngressList <a name="NetworkPolicyV1SpecIngressList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.get"></a>

```csharp
private NetworkPolicyV1SpecIngressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngress[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]

---


### NetworkPolicyV1SpecIngressOutputReference <a name="NetworkPolicyV1SpecIngressOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putFrom">PutFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFrom` <a name="PutFrom" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putFrom"></a>

```csharp
private void PutFrom(IResolvable|NetworkPolicyV1SpecIngressFrom[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putFrom.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]

---

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putPorts"></a>

```csharp
private void PutPorts(IResolvable|NetworkPolicyV1SpecIngressPorts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putPorts.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]

---

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.from">From</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList">NetworkPolicyV1SpecIngressFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList">NetworkPolicyV1SpecIngressPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.fromInput">FromInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.portsInput">PortsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.from"></a>

```csharp
public NetworkPolicyV1SpecIngressFromList From { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList">NetworkPolicyV1SpecIngressFromList</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.ports"></a>

```csharp
public NetworkPolicyV1SpecIngressPortsList Ports { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList">NetworkPolicyV1SpecIngressPortsList</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.fromInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressFrom[] FromInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.portsInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressPorts[] PortsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngress InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>

---


### NetworkPolicyV1SpecIngressPortsList <a name="NetworkPolicyV1SpecIngressPortsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.get"></a>

```csharp
private NetworkPolicyV1SpecIngressPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressPorts[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]

---


### NetworkPolicyV1SpecIngressPortsOutputReference <a name="NetworkPolicyV1SpecIngressPortsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecIngressPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetEndPort">ResetEndPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPort` <a name="ResetEndPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetEndPort"></a>

```csharp
private void ResetEndPort()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.endPortInput">EndPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.endPort">EndPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPortInput`<sup>Optional</sup> <a name="EndPortInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.endPortInput"></a>

```csharp
public double EndPortInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `EndPort`<sup>Required</sup> <a name="EndPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.endPort"></a>

```csharp
public double EndPort { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngressPorts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>

---


### NetworkPolicyV1SpecOutputReference <a name="NetworkPolicyV1SpecOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putEgress">PutEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putPodSelector">PutPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resetIngress">ResetIngress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgress` <a name="PutEgress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putEgress"></a>

```csharp
private void PutEgress(IResolvable|NetworkPolicyV1SpecEgress[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putEgress.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]

---

##### `PutIngress` <a name="PutIngress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putIngress"></a>

```csharp
private void PutIngress(IResolvable|NetworkPolicyV1SpecIngress[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putIngress.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]

---

##### `PutPodSelector` <a name="PutPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putPodSelector"></a>

```csharp
private void PutPodSelector(NetworkPolicyV1SpecPodSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putPodSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a>

---

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resetEgress"></a>

```csharp
private void ResetEgress()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resetIngress"></a>

```csharp
private void ResetIngress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList">NetworkPolicyV1SpecEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList">NetworkPolicyV1SpecIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.podSelector">PodSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference">NetworkPolicyV1SpecPodSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.egressInput">EgressInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.ingressInput">IngressInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.podSelectorInput">PodSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.policyTypesInput">PolicyTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.policyTypes">PolicyTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.egress"></a>

```csharp
public NetworkPolicyV1SpecEgressList Egress { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList">NetworkPolicyV1SpecEgressList</a>

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.ingress"></a>

```csharp
public NetworkPolicyV1SpecIngressList Ingress { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList">NetworkPolicyV1SpecIngressList</a>

---

##### `PodSelector`<sup>Required</sup> <a name="PodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.podSelector"></a>

```csharp
public NetworkPolicyV1SpecPodSelectorOutputReference PodSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference">NetworkPolicyV1SpecPodSelectorOutputReference</a>

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.egressInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecEgress[] EgressInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.ingressInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecIngress[] IngressInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]

---

##### `PodSelectorInput`<sup>Optional</sup> <a name="PodSelectorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.podSelectorInput"></a>

```csharp
public NetworkPolicyV1SpecPodSelector PodSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a>

---

##### `PolicyTypesInput`<sup>Optional</sup> <a name="PolicyTypesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.policyTypesInput"></a>

```csharp
public string[] PolicyTypesInput { get; }
```

- *Type:* string[]

---

##### `PolicyTypes`<sup>Required</sup> <a name="PolicyTypes" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.policyTypes"></a>

```csharp
public string[] PolicyTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.internalValue"></a>

```csharp
public NetworkPolicyV1Spec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a>

---


### NetworkPolicyV1SpecPodSelectorMatchExpressionsList <a name="NetworkPolicyV1SpecPodSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecPodSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.get"></a>

```csharp
private NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecPodSelectorMatchExpressions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]

---


### NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference <a name="NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecPodSelectorMatchExpressions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>

---


### NetworkPolicyV1SpecPodSelectorOutputReference <a name="NetworkPolicyV1SpecPodSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new NetworkPolicyV1SpecPodSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(IResolvable|NetworkPolicyV1SpecPodSelectorMatchExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList">NetworkPolicyV1SpecPodSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchExpressions"></a>

```csharp
public NetworkPolicyV1SpecPodSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList">NetworkPolicyV1SpecPodSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public IResolvable|NetworkPolicyV1SpecPodSelectorMatchExpressions[] MatchExpressionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.internalValue"></a>

```csharp
public NetworkPolicyV1SpecPodSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a>

---



